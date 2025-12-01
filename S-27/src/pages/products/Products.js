import axios from "axios";
import mystore from "../../redux/store/store";
export function getAllProducts(setProducts) {
  //API Integration
  axios
    .get("https://fakestoreapi.com/products")
    .then((res) => {
      setProducts(res.data);
    })
    .catch((error) => {
      alert("Something went wrong");
    });
}

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

export function addProductInReduxStore(product) {
  //create a action object
  var productAction = {
    type: "add-product",
    payload: product,
  };

  //call dispatch
  mystore.dispatch(productAction);
}

export function addToCart(product, dispatch) {
  var cartAction = {
    type: "add-to-cart",
    payload: product,
  };

  dispatch(cartAction);
}