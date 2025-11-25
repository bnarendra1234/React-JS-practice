import axios from "axios";
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