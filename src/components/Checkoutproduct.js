import { Button } from "@material-ui/core";
import React from "react";
import { Table } from "react-bootstrap";
import "../css/checkoutproduct.css";
import { useStateValue } from "../StateProvider";
function Checkoutproduct({ id, title, price, image, ratting }) {
  const [{ basket }, dispatch] = useStateValue();

  const removeFromBasket = () => {
    dispatch({
      type: "REMOVE_FROM_BASKET",
      id: id,
      item: {
        id,
        title,
        price,
        image,
        ratting,
      },
    });
    //TODO dispatch
  };

  return (
    <div className="checkoutproduct">
      <Table striped bordered hover>
        <tbody>
          <tr>
            <td>
              <img src={image} alt="" />
            </td>
            <td className="title">{title}</td>
            <td>${price}</td>
            <td>
              <Button
                onClick={removeFromBasket}
                variant="contained"
                color="secondary"
              >
                Remove from basket
              </Button>
            </td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
}

export default Checkoutproduct;
