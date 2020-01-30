import React, { useState, useEffect } from "react";
import { Container } from "../../stateless";
import api from "../../../api";
import { useSelector, useDispatch } from "react-redux";
import { InputGroup, FormControl } from "react-bootstrap";
import { PrimaryButton } from "../../stateless/Buttons";
import { showAlert } from "../../../actions";
import Loader from "../../Loader";

const CouponManage = _ => {
  const token = useSelector(state => state.token);
  const [coupon, setCoupon] = useState({ code: "", discount: "" });
  const [couponsList, setCouponsList] = useState(null);
  const [isPushing, setIsPushing] = useState(false);
  const [isFetching, setIsFetching] = useState(false);

  const dispatch = useDispatch();
  const onChange = ({ name, value }) => {
    setCoupon({ ...coupon, [name]: value });
  };
  const { isAdmin } = token;

  useEffect(
    _ => {
      if (!token.token) return;
      const fetchCoupons = async _ => {
        setIsFetching(true);
        await api
          .get("/coupon/list", {
            headers: {
              Authorization: "Bearer " + token.token
            }
          })
          .then(resp => {
            if (resp.data.status === 200)
              setCouponsList(resp.data.coupons.reverse());
            else dispatch(showAlert(resp.data.message, "failure"));
          })
          .catch(err => {
            dispatch(showAlert("Unable to send/receive request!", "failure"));
          });
        setIsFetching(false);
      };
      fetchCoupons();
    },
    [token.token]
  );

  const onSubmit = async _ => {
    setIsPushing(true);
    await api
      .post("/coupon/generate", coupon, {
        headers: {
          Authorization: "Bearer " + token.token
        }
      })
      .then(resp => {
        if (resp.data.status === 200) {
          dispatch(showAlert(resp.data.message, "success"));
          setCouponsList([...couponsList, resp.data.coupon]);
        } else {
          dispatch(showAlert(resp.data.message, "failure"));
        }
      })
      .catch(err => {
        dispatch(showAlert("Unable to send/receive request!", "failure"));
      });
    setIsPushing(false);
  };

  const renderCoupons = _ => {
    if (isFetching || !couponsList) {
      return <Loader />;
    } else {
      if (couponsList.length === 0) {
        return <p className="sub-header">No coupons found</p>;
      }
      return couponsList.map((item, index) => {
        return <Coupon item={item} key={index} />;
      });
    }
  };

  const Coupon = props => {
    const item = props.item;
    return (
      <>
        <div className="mb-3 mt-3 gray-border p-3 px-0">
          <strong className="text-danger">
            CODE: <span className="text-primary">{item.code}</span>
          </strong>
          <br />
          <strong className="text-success">
            DISCOUNT: <span className="text-primary">{item.discount}%</span>
          </strong>
          {item.isUsed ? (
            <div className="p-3 mt-3 w-100 text-center text-white mx-auto  bg-danger">
              USED
            </div>
          ) : (
            <div className="p-3 mt-3 w-100 text-center text-white mx-auto bg-success">
              UNUSED
            </div>
          )}
        </div>
      </>
    );
  };

  if (!isAdmin) {
    return null;
  } else {
    return (
      <Container className="mt-5 mb-5">
        <p className="header text-left mb-3">AVAILABE COUPONS</p>
        <div className="gray-border p-3 px-0">{renderCoupons()}</div>
        <p className="header text-left mt-5">GENERATE COUPONS</p>
        <form className="gray-border p-3 px-0 mt-3">
          <InputGroup className="mb-3 mt-3">
            <InputGroup.Prepend>
              <InputGroup.Text id="basic-addon1">CODE</InputGroup.Text>
            </InputGroup.Prepend>
            <FormControl
              placeholder="COUPON CODE"
              aria-label="COUPON CODE"
              aria-describedby="basic-addon1"
              name="code"
              value={coupon.code}
              onChange={({ target }) => onChange(target)}
              required
            />
          </InputGroup>
          <InputGroup className="mb-3 mt-3">
            <InputGroup.Prepend>
              <InputGroup.Text id="basic-addon1">%</InputGroup.Text>
            </InputGroup.Prepend>
            <FormControl
              placeholder="DISCOUNT"
              aria-label="DISCOUNT"
              aria-describedby="basic-addon1"
              name="discount"
              value={coupon.discount}
              onChange={({ target }) => onChange(target)}
              required
            />
          </InputGroup>
          <PrimaryButton
            className={isPushing ? "status-running" : ""}
            onClick={onSubmit}
            title="GENERATE"
          />
        </form>
      </Container>
    );
  }
};

export default CouponManage;
