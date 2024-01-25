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
          phone:
          <input
            value={phone}
            onChange={(event) => setPhone(event.target.value)}
          />
        </label>
        <label>
          card number:
          <input
            value={cardnumber}
            onChange={(event) => setCardnumber(event.target.value)}
          />
        </label>
        <label>
          exp date:
          <input
            value={expdate}
            onChange={(event) => setExpdate(event.target.value)}
          />
        </label>
        <label>
          security code:
          <input
            value={securitycode}
            onChange={(event) => SetSecuritycode(event.target.value)}
          />
        </label>
        <div className="signup-button">
          <button>Register</button>
          <Link to="/signUp"></Link>
        </div>
      </form>
    </>
  );
}
