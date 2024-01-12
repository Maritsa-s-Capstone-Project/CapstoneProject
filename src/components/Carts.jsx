import { getSingleCart } from "../API/cart";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { getSingleProduct } from "../API/product";

export default function Cart({ user }) {
  const [cart, setCart] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    async function loadCart() {
      try {
        const results = await getSingleCart(user.id);
        const cartItems = await Promise.all(
          results[0].products.map((item) => getSingleProduct(item.productId))
        );
        setCart(cartItems);
        console.log(cartItems);
      } catch (err) {
        console.log(err);
      }
    }
    loadCart();
  }, [user]);

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
            {/* <p>Description: {products.description}</p> */}
            <p>Id: {products.id}</p>
            <p>Price: {products.price}</p>
          </div>
        );
      })}
    </div>
  );
}
