import { useState } from "react";
import { signUpUser } from "../API/login";
import { Link, useNavigate } from "react-router-dom";

export default function Billing() {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [city, setCity] = useState("");
  const [street, setStreet] = useState("");
  const [number, setNumber] = useState("");
  const [zipcode, setZipcode] = useState("");
  const [lat, setLat] = useState("");
  const [long, setLong] = useState("");
  const [phone, setPhone] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    const userObj = {
      email,
      username,
      password,
      name: {
        firstname,
        lastname,
      },
      address: {
        city,
        street,
        number,
        zipcode,
        geolocation: {
          lat,
          long,
        },
      },
      phone,
    };

    const nextToken = await signUpUser(userObj);
    return nextToken;
  };

  return (
    <>
      <form className="signUp-container" onSubmit={handleSubmit}>
        <label>
          email:
          <input
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
        </label>
        <label>
          username:
          <input
            value={username}
            onChange={(event) => setUsername(event.target.value)}
          />
        </label>
        <label>
          password:
          <input
            type="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
        </label>
        <label>
          firstname:
          <input
            value={firstname}
            onChange={(event) => setFirstname(event.target.value)}
          />
        </label>
        <label>
          lastname:
          <input
            value={lastname}
            onChange={(event) => setLastname(event.target.value)}
          />
        </label>
        <label>
          city:
          <input
            value={city}
            onChange={(event) => setCity(event.target.value)}
          />
        </label>
        <label>
          street:
          <input
            value={street}
            onChange={(event) => setStreet(event.target.value)}
          />
        </label>
        <label>
          number:
          <input
            value={number}
            onChange={(event) => setNumber(event.target.value)}
          />
        </label>
        <label>
          zipcode:
          <input
            value={zipcode}
            onChange={(event) => setZipcode(event.target.value)}
          />
        </label>
        <label>
          lat:
          <input value={lat} onChange={(event) => setLat(event.target.value)} />
        </label>
        <label>
          long:
          <input
            value={long}
            onChange={(event) => setLong(event.target.value)}
          />
        </label>
        <label>
          phone:
          <input
            value={phone}
            onChange={(event) => setPhone(event.target.value)}
          />
        </label>
        <button>Register</button>
        <Link to="/signUp"></Link>
      </form>
    </>
  );
}
