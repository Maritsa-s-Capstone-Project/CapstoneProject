import { Link } from "react-router-dom";

export default function Navigations({ token }) {
  return (
    <div className="nav-bar">
      <Link to="/">Home</Link>
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
      <Link to="/cart">Cart</Link>
    </div>
  );
}
