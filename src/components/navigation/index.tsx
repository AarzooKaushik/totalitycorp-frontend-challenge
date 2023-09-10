import { NavLink } from "react-router-dom";
import { useState, useEffect } from "react";
import classes from "./style.module.css";
import React from "react";
const MainNavigation: React.FC = () => {
  const [totalQuantity, setTotalQuantity] = useState<number>(0);

  useEffect(() => {
    const updateTotalQuantity = () => {
      const cartItems = JSON.parse(localStorage.getItem("cart") || "[]");
      if (cartItems) {
        const newTotalQuantity = cartItems.reduce(
          (total: number, item: any) => total + item.quantity,
          0
        );
        setTotalQuantity(newTotalQuantity);
      }
    };

    window.addEventListener("storage", updateTotalQuantity);

    updateTotalQuantity();

    return () => {
      window.removeEventListener("storage", updateTotalQuantity);
    };
  }, []);

const username : string = JSON.parse(localStorage.getItem('userDetails') || "[]").username;

  return (
    <nav>
      <div className={classes.navbar}>
        <NavLink to="/shop" end>
       <div className={classes.userDetails}>
       <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxcR2d5NjY4pfYpeWmuqhL-pkV2nsRda-9qPn5v0tKRA&s"
              alt="User Avatar"
              className={classes.avatar}
            />
          <h1 className={classes.logo}>{username}</h1>
       </div>
        </NavLink>

     
       
      <NavLink to="/shop/cart" className={classes.cartActive}>
          <button className={classes.cartBtn}>
            Cart {totalQuantity}
          </button>
        </NavLink>

        <NavLink className={classes.menuAction} to="/shop/cart">
          <i className="fa-solid fa-cart-shopping"></i>
        </NavLink>
       

      </div>
    </nav>
  );
};

export default MainNavigation;
