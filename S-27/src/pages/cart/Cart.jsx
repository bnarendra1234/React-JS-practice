import React from "react";
import "./Cart.css";
import { useSelector, useDispatch } from "react-redux";
function Cart() {
  const cart_data = useSelector((store) => {
    return store.carts;
  });
  const dispatch = useDispatch();

  const removeFromCart = (id) => {
    var cartRemoveAction = {
      type: "remove-cart",
      payload: id,
    };

    dispatch(cartRemoveAction);
  };

  return (
    <div className="cart">
      <table cellPadding={10}>
        <thead>
          <tr>
            <th>IMAGE</th>
            <th>TITLE</th>
            <th>PRICE</th>
            <th>QTY</th>
            <th>ACTION</th>
          </tr>
        </thead>
        <tbody>
          {cart_data.map(function (cart) {
            return (
              <tr style={{ boxShadow: "10px" }}>
                <td>
                  <img src={cart.image} alt="" width="70" height={70} />
                </td>
                <td>{cart.title}</td>
                <td>{cart.price}</td>
                <td>
                  <input
                    type="number"
                    style={{ width: "30px", border: "none", outline: "none" }}
                  />
                </td>
                <td>
                  <button
                    onClick={() => {
                      removeFromCart(cart.id);
                    }}
                  >
                    Remove
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default Cart;