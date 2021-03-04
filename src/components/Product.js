import React from "react";
import "../css/product.css";
import StarIcon from "@material-ui/icons/Star";
import { Button, Card } from "react-bootstrap";
import { useStateValue } from "../StateProvider";
function Product({ id, title, price, image, ratting }) {
  const [{ basket }, dispatch] = useStateValue();
  console.log(basket);
  const addToBusket = () => {
    dispatch({
      type: "ADD_TO_BASKET",
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
    <div className="product">
      <Card style={{ width: "24rem" }}>
        <Card.Img variant="top" src={image} />
        <Card.Body>
          <Card.Title>${price}</Card.Title>
          <Card.Text>{title}</Card.Text>
          <div className="product_rating">
            {Array(ratting)
              .fill()
              .map((_, i) => (
                <StarIcon />
              ))}
            <StarIcon />
          </div>
          <Button onClick={addToBusket} variant="primary">
            Add To Busket
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
}

export default Product;
