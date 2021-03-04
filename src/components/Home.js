import React from "react";
import "../css/home.css";
import Product from "./Product";
import { Row, Col } from "react-bootstrap";
function Home() {
  return (
    <div className="hone">
      <div className="home__container">
        <img
          className="home_image"
          src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Hero/Fuji_TallHero_45M_v2_1x._CB432458380_.jpg"
          alt=""
        />
        <div className="home__row">
          <Row>
            <Col md={4}>
              <Product
                id={1}
                title="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Harum, dolores velit omnis odio quidem placeat."
                price={1258.5}
                image="https://pcbonlineshop.com/photos/product/4/176/4.jpg"
                ratting={4}
              />
            </Col>
            <Col md={4}>
              <Product
                id={2}
                title="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Harum, dolores velit omnis odio quidem placeat."
                price={325.5}
                image="https://pcbonlineshop.com/photos/product/4/176/4.jpg"
                ratting={4}
              />
            </Col>
            <Col md={4}>
              <Product
                id={3}
                title="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Harum, dolores velit omnis odio quidem placeat."
                price={35.5}
                image="https://pcbonlineshop.com/photos/product/4/176/4.jpg"
                ratting={4}
              />
            </Col>
            <Col md={4}>
              <Product
                id={4}
                title="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Harum, dolores velit omnis odio quidem placeat."
                price={300.5}
                image="https://pcbonlineshop.com/photos/product/4/176/4.jpg"
                ratting={4}
              />
            </Col>
          </Row>
        </div>
      </div>
    </div>
  );
}

export default Home;
