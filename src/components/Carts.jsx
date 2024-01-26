import { getSingleCart } from "../API/cart";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { getSingleProduct } from "../API/product";
import CheckoutForm from "./CheckoutForm";

export default function Cart({ user, cart, setCart }) {
  const navigate = useNavigate();
  const calculateTotal = () => {
    let total = 0;
    for (const item of cart) {
      total += item.price * item.quantity;
    }
    return total;
  };
  async function deleteItemFromCart(product) {
    try {
      // Update the local cart by removing the item
      const updatedCart = cart.filter((item) => item.id !== product.id);
      setCart(updatedCart);

      // Update the local storage
      localStorage.setItem("cart", JSON.stringify(updatedCart));
    } catch (err) {
      console.error("Error deleting item from cart:", err);
    }
  }
  const handleQuantityChange = (event, product) => {
    const newQuantity = event.target.value;
    const updatedCart = cart.map((item) => {
      if (item.id === product.id) {
        return { ...item, quantity: parseInt(newQuantity) };
      }
      return item;
    });
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  return (
    <div className="cartproduct-container">
      {cart.map((products, index) => {
        return (
          <div className="product-info" key={index}>
            <h5>{products.title}</h5>
            <img alt="products" width="200" src={products.image} />
            <p>Category: {products.category}</p>
            <p>Id: {products.id}</p>
            <p>Price: {products.price}</p>

            <div className="quantity-input">
              <label htmlFor={`quantity_${products.id}`}>Quantity:</label>
              <input
                type="number"
                id={`quantity_${products.id}`}
                value={products.quantity}
                onChange={(event) => handleQuantityChange(event, products)}
              />
            </div>

            <div className="remove-button">
              <button onClick={() => deleteItemFromCart(products)}>
                Remove
              </button>
            </div>
          </div>
        );
      })}
      <div className="total-container">Total: ${calculateTotal()} </div>
      <div>
        <button onClick={() => navigate(`/checkout`)}>Check Out</button>
      </div>
    </div>
  );
}
