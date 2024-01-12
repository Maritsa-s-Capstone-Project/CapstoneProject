// array of products <---- from the cart API call <-- e.g. stored in a variable cartArr
// create a function that makes an api call for a single product, e.g. getProduct
// Promise.all(cartArr.map(item=>getProduct(item.productId))
// .then(res=>// you have your array here)
// .catch(err);
// cartArr = [{"productId":1,"quantity":2},{"productId":9,"quantity":1}]
// [getProduct(1), getProduct(9)]
// [{name:"jacket", price:99.99}, {name:"book", price:10.00}]
const API_URL = "https://fakestoreapi.com";

// export const getCart = async () => {
//   try {
//     const rsp = await fetch(`${API_URL}/carts`);
//     const json = await rsp.json();
//     return json;
//   } catch (err) {
//     console.error(err);
//   }
// };

export const getSingleCart = async (userId) => {
  try {
    const rsp = await fetch(`${API_URL}/carts/user/${userId}`);
    const json = await rsp.json();
    return json;
  } catch (err) {
    console.error(err);
  }
};
