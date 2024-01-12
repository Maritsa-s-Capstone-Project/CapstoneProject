const API_URL = "https://fakestoreapi.com";

export const loginUser = async (userObj) => {
  try {
    const rsp = await fetch(`${API_URL}/auth/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: userObj.username,
        password: userObj.password,
      }),
    });
    const json = await rsp.json();
    return json.token;
  } catch (err) {
    console.log(err);
  }
};

export const signUpUser = async (userObj) => {
  try {
    const rsp = await fetch(`${API_URL}/users`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userObj),
    });
    const json = await rsp.json();

    return json;
  } catch (err) {
    console.log(err);
  }
};
