import React from "react";
import "./Product-Details.css";
function ProductDetails() {
  return (
    <div className="product-details">
      <div className="imageSection">
        <img
          src="https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_t.png"
          width={"100%"}
          height={"100%"}
          alt=""
        />
      </div>
      <div className="contentSection">
        <div className="col-2">
          <div>
            <dl>
              <dt>Product Name</dt>
              <dd>Men's Jacket</dd>
            </dl>
          </div>
          <div>
            <dl>
              <dt>Price</dt>
              <dd>$ 500</dd>
            </dl>
          </div>
          <div>
            <dl>
              <dt>Rating</dt>
              <dd>4.7</dd>
            </dl>
          </div>
        </div>
        <div className="col-2">
          <div>
            <dl>
              <dt>Category</dt>
              <dd>Men's Clothing</dd>
            </dl>
          </div>
          <div>
            <dl>
              <dt>Rating</dt>
              <dd>4.7</dd>
            </dl>
          </div>
        </div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
}

export default ProductDetails;