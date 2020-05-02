import React from "react";
import Swal from "sweetalert2";
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
        <div className="arrow" onClick={() => removeItem(cartItem)}>
          &#10094;
        </div>
        <span className="value">{quantity}</span>
        <div className="arrow" onClick={() => addItem(cartItem)}>
          &#10095;
        </div>
      </span>
      <span className="price">{price}</span>
      <div
        className="remove-button"
        onClick={() =>
          Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showClass: {
              popup: "animated fadeInDown faster",
            },
            hideClass: {
              popup: "animated fadeOutUp faster",
            },
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!",
          }).then((result) => {
            if (result.value) {
              clearItem(cartItem);
              Swal.fire(
                "Deleted!",
                "Your item has been deleted from cart.",
                "success"
              );
            }
          })
        }
      >
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
