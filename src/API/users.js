const API_URL = "https://fakestoreapi.com";

export const getAllUsers = async () => {
  try {
    const rsp = await fetch(`${API_URL}/users`);
    const json = await rsp.json();
    return json;
  } catch (err) {
    console.log(err);
  }
};
