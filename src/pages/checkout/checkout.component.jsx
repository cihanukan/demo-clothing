import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectCartItems,selectCartTotals } from "../../redux/cart/cart.selectors";
import CheckoutItem from "../../components/checkout-item/checkout-item.component";
import "./checkout.styles.scss";

const CheckoutPage = ({cartTtems, total}) => {
  return (
    <div className="checkout-page">
      <div className="checkout-header">
        <div className="header-block">
          <span>Product</span>
        </div>
        <div className="header-block">
          <span>Name</span>
        </div>
        <div className="header-block">
          <span>Quantity</span>
        </div>
        <div className="header-block">
          <span>Price</span>
        </div>
        <div className="header-block">
          <span>Remove</span>
        </div>
      </div>
      {
        cartTtems.map(cartItem=> <CheckoutItem key={cartItem.id} cartItem={cartItem}/>)
      }
      <div className="total"><span>TOTAL: {total} TL</span></div>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
    cartTtems : selectCartItems,
    total : selectCartTotals
})


export default connect(mapStateToProps)(CheckoutPage);
