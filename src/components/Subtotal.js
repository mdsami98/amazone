import React from "react";
import { Button } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import "../css/subtotal.css";
import CurrencyFormat from "react-currency-format";
import { useStateValue } from "../StateProvider";
import { getBasketTotal } from "../Reducer";
function Subtotal() {
  const [{ basket }, dispatch] = useStateValue();
  const history = useHistory();
  return (
    <div className="subtotal">
      <div className="outer_box">
        <CurrencyFormat
          renderText={(value) => (
            <>
              <h4>
                Subtotal ({basket.length} item) :
                <strong className="total__annount">{value}</strong>
              </h4>
              <small className="subtotal_gift">
                <input type="checkbox" /> The Order contains a gift
              </small>
            </>
          )}
          value={getBasketTotal(basket)}
          displayType={"text"}
          thousandSeparator={true}
          prefix={"$"}
        />
        <Button
          className="proceed__to_checkout"
          variant="primary"
          size="lg"
          block
          onClick={(e) => history.push("/payment")}
        >
          Proceed To Checkout
        </Button>
      </div>
    </div>
  );
}

export default Subtotal;
