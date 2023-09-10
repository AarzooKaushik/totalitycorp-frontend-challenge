import React, { useState } from "react";
import classes from "./style.module.css";
import Button from "../button";

interface CheckoutFormProps {
  onCheckout: (data: CheckoutFormData) => void;
}

interface ShippingInfo {
  name: string;
  address: string;
  phone: string;
}

interface OtherShippingInfo {
  city: string;
  postalCode: string;
}

interface PaymentInfo {
  cardNumber: string;
  cardholderName: string;
}

interface ValidationErrors {
  name: boolean;
  address: boolean;
  phone: boolean;
  city: boolean;
  postalCode: boolean;
  cardNumber: boolean;
  cardholderName: boolean;
}

 export interface CheckoutFormData {
  shippingInfo: ShippingInfo;
  otherShippingInfo: OtherShippingInfo;
  paymentInfo: PaymentInfo;
}

const CheckoutForm: React.FC<CheckoutFormProps> = ({ onCheckout }) => {
  const [step, setStep] = useState<number>(1);
  const [isNameFilled, setIsNameFilled] = useState<boolean>(false);
  const [isAddressFilled, setIsAddressFilled] = useState<boolean>(false);
  const [isPhoneFilled, setIsPhoneFilled] = useState<boolean>(false);
  const [isCityFilled, setIsCityFilled] = useState<boolean>(false);
  const [isPostalCodeFilled, setIsPostalCodeFilled] = useState<boolean>(false);
  const [isCardNumberFilled, setIsCardNumberFilled] = useState<boolean>(false);
  const [isCardholderNameFilled, setIsCardholderNameFilled] = useState<boolean>(false);

  const [shippingInfo, setShippingInfo] = useState<ShippingInfo>({
    name: "",
    address: "",
    phone: "",
  });

  const [otherShippingInfo, setOtherShippingInfo] = useState<OtherShippingInfo>({
    city: "",
    postalCode: "",
  });

  const [paymentInfo, setPaymentInfo] = useState<PaymentInfo>({
    cardNumber: "",
    cardholderName: "",
  });

  const [validationErrors, setValidationErrors] = useState<ValidationErrors>({
    name: false,
    address: false,
    phone: false,
    city: false,
    postalCode: false,
    cardNumber: false,
    cardholderName: false,
  });

  const isStep1Valid = (): boolean => {
    const errors: ValidationErrors = {
      name: shippingInfo.name.trim() === "",
      address: shippingInfo.address.trim() === "",
      phone: shippingInfo.phone.trim() === "",
      city: false,
      postalCode: false,
      cardNumber: false,
      cardholderName: false,
    };

    setValidationErrors(errors);

    return !Object.values(errors).some((error) => error);
  };

  const isStep2Valid = (): boolean => {
    const errors: ValidationErrors = {
      city: otherShippingInfo.city.trim() === "",
      postalCode: otherShippingInfo.postalCode.trim() === "",
      name: false,
      address: false,
      phone: false,
      cardNumber: false,
      cardholderName: false,
    };

    setValidationErrors(errors);

    return !Object.values(errors).some((error) => error);
  };

  const isStep3Valid = (): boolean => {
    const errors: ValidationErrors = {
      cardNumber: paymentInfo.cardNumber.trim() === "",
      cardholderName: paymentInfo.cardholderName.trim() === "",
      name: false,
      address: false,
      phone: false,
      city: false,
      postalCode: false,
    };

    setValidationErrors(errors);

    return !Object.values(errors).some((error) => error);
  };

  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
   
    if (!isStep1Valid()) {
      return;
    }

    if (step === 1) {
      setStep(2);
    } else if (step === 2) {
      if (!isStep2Valid()) {
        return;
      }
      setStep(3);
    } else if (step === 3) {
      if (!isStep3Valid()) {
        return;
      }
      const formData: CheckoutFormData = {
        shippingInfo: {
          name: shippingInfo.name,
          address: shippingInfo.address,
          phone: shippingInfo.phone,
        },
        otherShippingInfo: {
          city: otherShippingInfo.city,
          postalCode: otherShippingInfo.postalCode,
        },
        paymentInfo: {
          cardNumber: paymentInfo.cardNumber,
          cardholderName: paymentInfo.cardholderName,
        },
      };
  
      onCheckout(formData);
    }
  };

  return (
    <div className={classes.formContainer}>
      {step === 1 && (
        <form className={classes.formSection} onSubmit={handleFormSubmit}>
          <h2>Step 1: Enter Name, Address, and Phone</h2>
          <div
            className={`${classes.formGroup} ${
              validationErrors.name ? classes.error : ""
            } ${isNameFilled ? classes.filled : ""}`}
          >
            <input
              type="text"
              id="name"
              value={shippingInfo.name}
              onChange={(e) => {
                setShippingInfo({ ...shippingInfo, name: e.target.value });
                setIsNameFilled(!!e.target.value);
              }}
            />

            <span>Name</span>
          </div>
          <div
            className={`${classes.formGroup} ${
              validationErrors.address ? classes.error : ""
            } ${isAddressFilled ? classes.filled : ""}`}
          >
            <input
              type="text"
              id="address"
              value={shippingInfo.address}
              onChange={(e) => {
                setShippingInfo({ ...shippingInfo, address: e.target.value });
                setIsAddressFilled(!!e.target.value);
              }}
            />
            <span>Address</span>
          </div>
          <div
            className={`${classes.formGroup} ${
              validationErrors.phone ? classes.error : ""
            } ${isPhoneFilled ? classes.filled : ""}`}
          >
            <input
              type="tel"
              id="phone"
              value={shippingInfo.phone}
              onChange={(e) => {
                setShippingInfo({ ...shippingInfo, phone: e.target.value });
                setIsPhoneFilled(!!e.target.value);
              }}
            />
            <span>Phone</span>
          </div>
          <Button>Next</Button>
        </form>
      )}

{step === 2 && (
        <form className={classes.formSection} onSubmit={handleFormSubmit}>
          <h2>Step 2: Enter Other Shipping Details</h2>
          <div
            className={`${classes.formGroup} ${
              validationErrors.city ? classes.error : ""
            } ${isCityFilled ? classes.filled : ""}`}
          >
            <input
              type="text"
              id="city"
              value={otherShippingInfo.city}
              onChange={(e) => {
                setOtherShippingInfo({
                  ...otherShippingInfo,
                  city: e.target.value,
                });
                setIsCityFilled(!!e.target.value);
              }}
            />
            <span>City</span>
          </div>
          <div
            className={`${classes.formGroup} ${
              validationErrors.postalCode ? classes.error : ""
            } ${isPostalCodeFilled ? classes.filled : ""}`}
          >
            <input
              type="text"
              id="postalCode"
              value={otherShippingInfo.postalCode}
              onChange={(e) => {
                setOtherShippingInfo({
                  ...otherShippingInfo,
                  postalCode: e.target.value,
                });

                setIsPostalCodeFilled(!!e.target.value);
              }}
            />
            <span>Pin</span>
          </div>
          <Button>Next</Button>
        </form>
      )}

      {step === 3 && (
        <form className={classes.formSection} onSubmit={handleFormSubmit}>
          <h2>Step 3: Enter Payment Details</h2>
          <div
            className={`${classes.formGroup} ${
              validationErrors.cardNumber ? classes.error : ""
            } ${isCardNumberFilled ? classes.filled : ""}`}
          >
            <input
              type="text"
              id="cardNumber"
              value={paymentInfo.cardNumber}
              onChange={(e) => {
                setPaymentInfo({
                  ...paymentInfo,
                  cardNumber: e.target.value,
                });
                setIsCardNumberFilled(!!e.target.value);
              }}
            />
            <span>Card Number</span>
          </div>
          <div
            className={`${classes.formGroup} ${
              validationErrors.cardholderName ? classes.error : ""
            } ${isCardholderNameFilled ? classes.filled : ""}`}
          >
            <input
              type="text"
              id="CardholderName"
              value={paymentInfo.cardholderName}
              onChange={(e) => {
                setPaymentInfo({
                  ...paymentInfo,
                  cardholderName: e.target.value,
                });

                setIsCardholderNameFilled(!!e.target.value);
              }}
            />
            <span>Cardholder</span>
          </div>
          <Button>Place Order</Button>
        </form>
      )}
    </div>
  );
};

export default CheckoutForm;
