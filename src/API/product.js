const API_URL = "https://fakestoreapi.com";

export const getProducts = async () => {
  try {
    const rsp = await fetch(`${API_URL}/products`, {});
    const json = await rsp.json();
    return json;
  } catch (err) {
    console.error(err);
  }
};

export const getSingleProduct = async (id) => {
  try {
    const rsp = await fetch(`${API_URL}/products/${id}`);
    const json = await rsp.json();
    return json;
  } catch (err) {
    console.error(err);
  }
};

export const getLimitResults = async () => {
  try {
    const rsp = await fetch(`${API_URL}/products?limit=${id}`);
    const json = await rsp.json();
    return json;
  } catch (err) {
    console.error(err);
  }
};

export const getSortResults = async () => {
  try {
    const rsp = await fetch(`${API_URL}/products?sort=desc`);
    const json = await rsp.json();
    return json;
  } catch (err) {
    console.error(err);
  }
};

export const getAllCategories = async () => {
  try {
    const rsp = await fetch(`${API_URL}/products/categories`);
    const json = await rsp.json();
    return json;
  } catch (err) {
    console.error(err);
  }
};
