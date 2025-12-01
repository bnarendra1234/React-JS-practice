const productReducer = (state, action) => {
  var data = {
    productDetails: null,
    carts: [],
  };

  if (action.type === "add-product") {
    data = {
      ...state,
      productDetails: action.payload,
    };
  } else if (action.type === "add-to-cart") {
    data = {
      ...state,
      carts: [...state.carts, action.payload],
    };
  }
  return data;
};

export default productReducer;