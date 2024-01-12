import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";

import Products from "./Products";
import SingleProduct from "./SingleProduct";
import Login from "./Login";
import Navigations from "./Navigations";
import SignUp from "./SignUp";
import Cart from "./Carts";

function App() {
  const [token, setToken] = useState(null);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const localToken = localStorage.getItem("token");
    if (localToken !== undefined) setToken(localToken);
  }, []);
  return (
    <>
      <h1>App</h1>
      <Navigations
        token={token}
        setToken={setToken}
        user={user}
        setUser={setUser}
      />

      <Routes>
        <Route
          path="/login"
          element={<Login setToken={setToken} setUser={setUser} />}
        />
        <Route path="/" element={<Products />} />
        <Route path="/products/:id" element={<SingleProduct />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/cart" element={<Cart user={user} />} />
      </Routes>
    </>
  );
}

export default App;
