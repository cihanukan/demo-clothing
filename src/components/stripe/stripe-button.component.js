import React from "react";
import Swal from "sweetalert2";
import StripeCheckout from "react-stripe-checkout";

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;

  //This key allows stripe to know that requests from any stripe checkout components are connected to our stripe account! 
  const publishableKey = "pk_test_lu9I2TLiO55yCXdf4kn4PoRL00OwJlWZ4u";

  const onToken = (token) => {
    console.log(token);
    Swal.fire({
      icon: "success",
      title: "Successful payment",
      text: "Your payment is sucessful",
    });
  };

  return (
    <StripeCheckout
      label="Pay Now"
      name="Demo Clothing Ltd."
      billingAddress
      shippingAddress
      image="https://sendeyo.com/up/d/f3eb2117da"
      description={`Your total is ${price} TRY`}
      amount={priceForStripe}
      token={onToken}
      stripeKey={publishableKey}
      currency="TRY"
    />
  );
};

export default StripeCheckoutButton;