import { Link } from "react-router-dom";
import shoppingbag from "../assets/shoppingbag.png";
import logo2 from "../assets/logo2.png";

export default function Navigations({ token, setToken, setUser, cartCount }) {
  return (
    <div>
      <div className="logo-container">
        <Link to="/">
          <img width="100" src={logo2} alt="logo" />
        </Link>
      </div>
      <nav className="nav-bar">
        {!token && <Link to="/login">Login</Link>}
        {token && (
          <Link
            to="/login"
            onClick={() => {
              setUser(null);
              localStorage.removeItem("token");
              localStorage.removeItem("username");
              setToken(null);
            }}
          >
            Logout
          </Link>
        )}
        <Link to="/signup">Sign Up</Link>
        <Link to="/cart">
          <img src={shoppingbag} alt="bag" />
          <span className="cart-length">{cartCount}</span>
        </Link>
      </nav>
      <div className="second-nav-bar">
        <Link to="/jewelry">Jewelry</Link>
        <Link to="/electronics">Electronics</Link>
        <Link to="/mensclothing">Men's Clothing</Link>
        <Link to="/womensclothing">Women's Clothing</Link>
      </div>
      <nav className="third-nav-bar">
        <div className="dropdown">
          <button className="dropbtn">SORT BY:</button>
          <div className="dropdown-content">
            <Link to="/sort">Best Selling:</Link>
            <Link to="/sortlowerprice">Price:Low to High </Link>
            <Link to="/sorthigherprice">Price:High to Low</Link>
          </div>
        </div>
      </nav>
    </div>
  );
}
