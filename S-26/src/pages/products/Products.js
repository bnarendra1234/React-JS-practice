import axios from "axios";
import mystore from "../../redux/store/store";
export function getAllProducts(setProducts) {
  //API Integration
  axios
    .get("https://fakestoreapi.com/products")
    .then((res) => {
      console.log("then executed");
      console.log(res.data);
      setProducts(res.data);
    })
    .catch((error) => {
      alert("Something went wrong");
      console.log(error);
    });
}


export function addProductInReduxStore(product) {
  //create a action object
  var productAction = {
    type: "add-product",
    payload: product,
  };

  //call dispatch
  mystore.dispatch(productAction);
}

/*
export function getCategorySpecificProducts(setProducts, category) {
  axios
    .get("https://fakestoreapi.com/products")
    .then((res) => {
      setProducts(() => {
        return res.data.filter((product) => {
          return product.category === category;
        });
      });
    })
    .catch((error) => {
      alert("Something went wrong");
      console.log(error);
    });
}
*/
export const getCategorySpecificProducts = async (setProducts, category) => {
  try {
    const response = await fetch(
      `https://fakestoreapi.com/products/category/${encodeURIComponent(
        category
      )}`
    );
    const data = await response.json();
    setProducts(data);
  } catch (error) {
    console.error("Error fetching category products:", error);
    setProducts(`Failed to load ${category} products`);
  }
};