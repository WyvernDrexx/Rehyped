import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import "./IsOnline.scss";
import { setIsOnline } from "../../actions";

const IsOnline = props => {
  const dispatch = useDispatch();
  const isOnline = useSelector(state => state.isOnline);

  useEffect(_ => {
    setInterval(_ => {
      dispatch(setIsOnline());
    }, 1500);
  }, []);

  return (
    <div className="pt-3">
      <div className={`browser-status ${true?"isOffline":"isOnline"}`}>
        <p className="sub-header">NO NETWORK ACCESS</p>
      </div>
    </div>
  );
};
export default IsOnline;
