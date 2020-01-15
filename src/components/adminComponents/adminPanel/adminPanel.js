import React from "react";
import { Container } from "../../stateless";
import { PrimaryButton, DarkButton } from "../../stateless/Buttons";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Table, Button } from "react-bootstrap";

export default _ => {
  const token = useSelector(state => state.token);
  if (token.isVerified)
    return (
      <div className="mt-6 mb-5">
        <Container>
          <Table variant="dark" bordered hover responsive>
            <thead>
              <tr>
                <th>#</th>
                <th>ACTIONS</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><p className="flex-center pt-2">1</p></td>
                <td>
                  <h2 className="text-center mb-0">ADD PRODUCT</h2>
                </td>
                <td className="p-0">
                  <Link to="/admin-pannexa/add-product">
                    <PrimaryButton className="w-100 pb-4" title="ADD" />
                  </Link>
                </td>
              </tr>
              <tr>
                <td><p className="flex-center pt-2">2</p></td>
                <td>
                  <h2 className="text-center mb-0">PRODUCT LIST</h2>
                </td>
                <td className="p-0">
                  <Link to="/admin-pannexa/list-products/all">
                    <DarkButton className="w-100 pb-4" title="GO TO" />
                  </Link>
                </td>
              </tr>
              <tr>
                <td><p className="flex-center pt-2">2</p></td>
                <td>
                  <h2 className="text-center text-danger mb-0">PUBLISHED LIST</h2>
                </td>
                <td className="p-0">
                  <Link to="/admin-pannexa/list-products/published">
                    <DarkButton className="w-100 pb-4 bg-danger" title="GO TO" />
                  </Link>
                </td>
              </tr>
              <tr>
                <td><p className="flex-center pt-2">2</p></td>
                <td>
                  <h2 className="text-center text-info  mb-0">UNBLISHED LIST</h2>
                </td>
                <td className="p-0">
                  <Link to="/admin-pannexa/list-products/unpublished">
                  <DarkButton className="w-100 pb-4 bg-primary" title="GO TO" />
                  </Link>
                </td>
              </tr>
            </tbody>
          </Table>
        </Container>
      </div>
    );
  else return null;
};
