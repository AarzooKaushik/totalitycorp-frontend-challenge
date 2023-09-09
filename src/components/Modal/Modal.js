import React, { useState } from "react";
import classes from "./Modal.module.css";

import CheckoutForm from "../checkOutForm/index";

const Modal = (props) => {
  const [isFormVisible, setFormVisible] = useState(true);

  const handleCheckout = (formData) => {
    console.log("Checkout Data:", formData);
    localStorage.setItem("cart", JSON.stringify([]));
    window.dispatchEvent(new Event("storage"));
    props.updateCartItems([]);
    setFormVisible(false);
  };

  return (
    <>
      <div onClick={props.onCloseHandler} className={classes.backDrop}></div>
      <div className={classes.modal}>
        <span onClick={props.onCloseHandler}> &#10006;</span>
        <h1>Checkout</h1>

        {isFormVisible ? (
          <CheckoutForm onCheckout={handleCheckout} />
        ) : (
          <div className={classes.successMessage}>
            <p>Your order has been placed successfully!</p>
          </div>
        )}
      </div>
    </>
  );
};

export default Modal;
