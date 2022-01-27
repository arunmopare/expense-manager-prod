//react functional component
// Language: javascript
import { Carousel } from "react-bootstrap";
import React from "react";
import banner1 from "./expenseBanner1.png";
import banner2 from "./money-matters-1173124.jpeg";
import NewTransactionForm from "../Main/Form/Form";
const Home = () => {
  return (
    <>
      <Carousel>
        <Carousel.Item>
          <img className="d-block w-100" src={banner1} alt="Save Money" />
          <Carousel.Caption>
            <h3>Expense Manager</h3>
            <p>Manage all you expenses</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={banner2} alt="Money Matters" />

          <Carousel.Caption>
            <h3>Expense Manager</h3>
            <p>Money Matters</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      <div className="container center text-center">
        <div className="row">
          <div className="col-md-3"></div>
          <div className="col-md-6">
            <NewTransactionForm></NewTransactionForm>
          </div>
          <div className="col-md-3"></div>
        </div>
      </div>
    </>
  );
};

export default Home;
