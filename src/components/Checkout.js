import React from "react";
import { Row, Col } from "react-bootstrap";
import "../css/checkout.css";
import Checkoutproduct from "./Checkoutproduct";
import Subtotal from "./Subtotal";
import { useStateValue } from "../StateProvider";
import FlipMove from "react-flip-move";
function Checkout() {
  const [{ basket, user }, dispatch] = useStateValue();
  return (
    <div className="checkout">
      <Row>
        <Col md={7}>
          <h4>Hello {user?.email}</h4>
          <div className="checkout_left">
            {basket.map((item) => (
              <Checkoutproduct
                id={item.id}
                title={item.title}
                price={item.price}
                image={item.image}
                ratting={item.ratting}
              />
            ))}
          </div>
        </Col>
        <Col md={5}>
          <div className="checkout_right">
            <Subtotal />
          </div>
        </Col>
      </Row>
    </div>
  );
}

export default Checkout;
