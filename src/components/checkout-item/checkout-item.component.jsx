import React from "react";
import "./checkout-item.styles.scss";
import {
  clearItemFromCart,
  addItem,
  removeItem,
} from "../../redux/cart/cart.actions";
import { connect } from "react-redux";
const CheckoutItem = ({ cartItem, clearItem, addItem, removeItem }) => {
  const { imageUrl, name, price, quantity } = cartItem;
  return (
    <div className="checkout-item">
      <div className="image-container">
        <img src={imageUrl} alt="checkout-item" />
      </div>
      <span className="name">{name}</span>

      <span className="quantity">
        <div className="arrow" onClick={() => removeItem(cartItem)}>&#10094;</div>
        <span className="value">
          {quantity}
        </span>
        <div className="arrow" onClick={() => addItem(cartItem)}>
          &#10095;
        </div>
      </span>
      <span className="price">{price}</span>
      <div className="remove-button" onClick={() => clearItem(cartItem)}>
        &#10006;
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  clearItem: (cartItem) => dispatch(clearItemFromCart(cartItem)),
  addItem: (cartItem) => dispatch(addItem(cartItem)),
  removeItem: (cartItem) => dispatch(removeItem(cartItem)),
});

export default connect(null, mapDispatchToProps)(CheckoutItem);
