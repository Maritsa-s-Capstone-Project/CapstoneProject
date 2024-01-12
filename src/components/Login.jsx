import { useState } from "react";
import { loginUser } from "../API/login";
import { Link, useNavigate } from "react-router-dom";
import { getAllUsers } from "../API/users";

export default function Login({ setToken, token, setUser }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    const userObj = {
      username,
      password,
    };
    const nextToken = await loginUser(userObj);
    const users = await getAllUsers();
    const user = await users.filter((_user) => {
      return _user.username === username; //will filter all users that you sent in
    })[0];
    setUser(user);
    setToken(nextToken);
    localStorage.setItem("username", userObj.username);
    localStorage.setItem("token", token);

    navigate("/");
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>
          Username:
          <input
            value={username}
            onChange={(event) => setUsername(event.target.value)}
          />
        </label>
        <label>
          Password:
          <input
            type="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
        </label>
        <button>Login</button>
        <Link to="/"></Link>
      </form>
    </>
  );
}
