import React from "react";
import { Link } from "react-router-dom";
import "./css/Item.css";

const Item = ({ item }) => {
  const { _id, name, image, supplier, price, description, quantity } = item;

  return (
    <div
      className="col text-light"
      data-aos="zoom-in-up"
      data-aos-duration="2000"
    >
      <div className="card">
        <img src={image} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <p className="card-text">{description.slice(0, 80) + "..."}</p>
          <p className="card-text">
            <b> price:</b>
            <i> {price}</i>
          </p>
          <p className="card-text">
            <b> supplier:</b>
            <i> {supplier}</i>
          </p>
          <p className="cart-text">
            <b>Quantity:</b> {quantity}
          </p>
          <Link to={`/inventory/${_id}`} className="btn btn-primary">
            STOCK UPDATE
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Item;
