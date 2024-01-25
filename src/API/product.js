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

// export const getLimitResults = async () => {
//   try {
//     const rsp = await fetch(`${API_URL}/products?limit=${id}`);
//     const json = await rsp.json();
//     return json;
//   } catch (err) {
//     console.error(err);
//   }
// };

export const getSortResults = async () => {
  try {
    const rsp = await fetch(`${API_URL}/products?sort=desc`);
    const json = await rsp.json();
    return json;
  } catch (err) {
    console.error(err);
  }
};

export const getPrices = async () => {
  try {
    const rsp = await fetch(`${API_URL}/products`, {});
    if (!rsp.ok) {
      throw new Error(`HTTP error! Status: ${rsp.status}`);
    }

    const json = await rsp.json();
    const prices = json.price;
    json.sort((a, b) => a.price - b.price);
    return json;
  } catch (err) {
    console.error("Error fetching data:", err);
    return [];
  }
};

export const getHighPrices = async () => {
  try {
    const rsp = await fetch(`${API_URL}/products`, {});
    if (!rsp.ok) {
      throw new Error(`HTTP error! Status: ${rsp.status}`);
    }

    const json = await rsp.json();
    const prices = json.price;
    json.sort((a, b) => b.price - a.price);
    return json;
  } catch (err) {
    console.error("Error fetching data:", err);
    return [];
  }
};

export const getInCategoryJewelery = async () => {
  try {
    const rsp = await fetch(`${API_URL}/products/category/jewelery`);
    const json = await rsp.json();
    return json;
  } catch (err) {
    console.error(err);
  }
};

export const getInCategoryElectronics = async () => {
  try {
    const rsp = await fetch(`${API_URL}/products/category/electronics`);
    const json = await rsp.json();
    return json;
  } catch (err) {
    console.error(err);
  }
};

export const getInCategoryMens = async () => {
  try {
    const rsp = await fetch(`${API_URL}/products/category/men%27s%20clothing`);
    const json = await rsp.json();
    return json;
  } catch (err) {
    console.error(err);
  }
};

export const getInCategoryWomens = async () => {
  try {
    const rsp = await fetch(
      `${API_URL}/products/category/women%27s%20clothing`
    );
    const json = await rsp.json();
    return json;
  } catch (err) {
    console.error(err);
  }
};
