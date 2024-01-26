import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";

import Products from "./Products";
import SingleProduct from "./SingleProduct";
import Login from "./Login";
import Navigations from "./Navigations";
import SignUp from "./SignUp";
import Cart from "./Carts";
import { getSingleCart } from "../API/cart";
import { getSingleProduct } from "../API/product";
import Sort from "./Sort";
import Jewlery from "./Jewlery";
import Electronics from "./Electronics";
import MensClothing from "./MensClothing";
import WomensClothing from "./WomensClothing";
import SortPrice from "./SortPrice";
import SortHighPrice from "./SortHighPrice";
import CheckoutForm from "./CheckoutForm";
import Thankyou from "./Thankyou";

function App() {
  const [token, setToken] = useState(null);
  const [user, setUser] = useState(null);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    async function loadCart() {
      try {
        if (user) {
          const results = await getSingleCart(user.id);
          const localCart = localStorage.getItem("cart");
          if (!localCart) {
            const cartItems = await Promise.all(
              results[0].products.map((item) =>
                getSingleProduct(item.productId)
              )
            );
            const products = results[0].products;

            const cartWithQuantities = cartItems.map((item, index) => ({
              ...item,
              quantity: products[index].quantity,
            }));
            localStorage.setItem("cart", JSON.stringify(cartWithQuantities));
            setCart(cartItems); //cartWithQuantities
          } else {
            // localStorage.setItem("cart", JSON.stringify(localCart));
            setCart(JSON.parse(localCart));
          }
        }
      } catch (err) {
        console.log(err);
      }
    }

    loadCart();
  }, [user]);

  useEffect(() => {
    const localToken = localStorage.getItem("token");
    if (localToken !== undefined) setToken(localToken);
  }, []);
  return (
    <>
      <Navigations
        token={token}
        setToken={setToken}
        user={user}
        setUser={setUser}
        cart={cart}
      />

      <Routes>
        <Route
          path="/login"
          element={<Login setToken={setToken} setUser={setUser} />}
        />
        <Route path="/" element={<Products />} />
        <Route
          path="/products/:id"
          element={<SingleProduct setCart={setCart} />}
        />
        <Route path="/signup" element={<SignUp />} />
        <Route
          path="/cart"
          element={<Cart user={user} cart={cart} setCart={setCart} />}
        />
        <Route path="/sort" element={<Sort />} />
        <Route path="/jewelry" element={<Jewlery />} />
        <Route path="/electronics" element={<Electronics />} />
        <Route path="/mensclothing" element={<MensClothing />} />
        <Route path="/womensclothing" element={<WomensClothing />} />
        <Route path="/sortlowerprice" element={<SortPrice />} />
        <Route path="/sorthigherprice" element={<SortHighPrice />} />
        <Route path="/checkout" element={<CheckoutForm />} />
        <Route path="/thankyou" element={<Thankyou />} />
      </Routes>
    </>
  );
}

export default App;
