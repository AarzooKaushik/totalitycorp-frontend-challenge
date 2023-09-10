import React, { useState } from "react";
import classes from "./style.module.css";

import CheckoutForm, {CheckoutFormData} from "./checkoutForm";

interface ModalProps {
  onCloseHandler: () => void;
  updateCartItems: (updatedItems: any[]) => void;
}

const Modal: React.FC<ModalProps> = (props) => {
  const [isFormVisible, setFormVisible] = useState(true);

  const handleCheckout = (formData:  CheckoutFormData)=> {
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
