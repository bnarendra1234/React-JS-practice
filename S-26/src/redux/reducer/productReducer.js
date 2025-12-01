const productReducer = (state, action) => {
  var data = null;
  if (action.type === "add-product") {
    data = action.payload;
  }
  return data;
};

export default productReducer;