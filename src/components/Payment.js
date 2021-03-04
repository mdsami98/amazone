import React from "react";
import { Row, Col } from "react-bootstrap";
import "../css/checkout.css";
import Checkoutproduct from "./Checkoutproduct";
import { useStateValue } from "../StateProvider";
import "../css/payment.css";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
function Payment() {
  const stripe = useStripe();
  const elements = useElements();
  const [{ basket, user }, dispatch] = useStateValue();
  return (
    <div className="payment">
      <Row>
        <Col md={12}>
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
        <Col md={12}>
          <div className="mayment_method">
            <h4>Payment Method</h4>
            <form>
              <CardElement />
              <button type="submit" disabled={!stripe}>
                Pay
              </button>
            </form>
          </div>
        </Col>
      </Row>
    </div>
  );
}

export default Payment;
