import { useState } from "react";
import { useNavigate } from "react-router";
export default function CheckoutForm() {
  const [email, setEmail] = useState("");
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [city, setCity] = useState("");
  const [street, setStreet] = useState("");
  const [number, setNumber] = useState("");
  const [zipcode, setZipcode] = useState("");
  const [phone, setPhone] = useState("");
  const [cardnumber, setCardnumber] = useState("");
  const [expdate, setExpdate] = useState("");
  const [securitycode, SetSecuritycode] = useState("");
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
  };

  return (
    <>
      <form className="signUp-container" onSubmit={handleSubmit}>
        <label>
          <h2>Shipping Address</h2>
          Email:
          <input
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
        </label>

        <label>
          Firstname:
          <input
            value={firstname}
            onChange={(event) => setFirstname(event.target.value)}
          />
        </label>
        <label>
          Lastname:
          <input
            value={lastname}
            onChange={(event) => setLastname(event.target.value)}
          />
        </label>
        <label>
          City:
          <input
            value={city}
            onChange={(event) => setCity(event.target.value)}
          />
        </label>
        <label>
          Street:
          <input
            value={street}
            onChange={(event) => setStreet(event.target.value)}
          />
        </label>
        <label>
          Number:
          <input
            value={number}
            onChange={(event) => setNumber(event.target.value)}
          />
        </label>
        <label>
          Zipcode:
          <input
            value={zipcode}
            onChange={(event) => setZipcode(event.target.value)}
          />
        </label>

        <label>
          Phone:
          <input
            value={phone}
            onChange={(event) => setPhone(event.target.value)}
          />
        </label>
        <label>
          <h2>Card Information</h2>
          Card Number:
          <input
            value={cardnumber}
            onChange={(event) => setCardnumber(event.target.value)}
          />
        </label>
        <label>
          Exp Date:
          <input
            value={expdate}
            onChange={(event) => setExpdate(event.target.value)}
          />
        </label>
        <label>
          Security Code:
          <input
            value={securitycode}
            onChange={(event) => SetSecuritycode(event.target.value)}
          />
        </label>
        <div className="signup-button">
          <button onClick={() => navigate(`/thankyou`)}>CHECK OUT</button>
        </div>
      </form>
    </>
  );
}
