import { getSingleCart } from "../API/cart";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { getSingleProduct } from "../API/product";

export default function Cart({ user, cart }) {
  return (
    <div className="product-container">
      {cart.map((products, index) => {
        return (
          <div
            className="product-info"
            key={index}
            onClick={() => navigate(`/products/${products.id}`)}
          >
            <h5>{products.title}</h5>
            <img alt="products" width="200" src={products.image} />
            <p>Category: {products.category}</p>
            <p>Id: {products.id}</p>
            <p>Price: {products.price}</p>
          </div>
        );
      })}
    </div>
  );
}
