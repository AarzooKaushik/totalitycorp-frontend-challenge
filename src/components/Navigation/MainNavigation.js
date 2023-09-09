import { NavLink } from "react-router-dom";
import { useState, useEffect } from "react";
import classes from "./MainNavigation.module.css";

const MainNavigation = () => {
  const [totalQuantity, setTotalQuantity] = useState(0);

  useEffect(() => {
    const updateTotalQuantity = (e) => {
      const cartItems = JSON.parse(localStorage.getItem("cart"));
      if (cartItems) {
        const newTotalQuantity = cartItems.reduce(
          (total, item) => total + item.quantity,
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
  });

  return (
    <>
      <nav>
        <div className={classes.navbar}>
          <NavLink to="/">
            <div className={classes.logo}>LOGO</div>
          </NavLink>

          <NavLink
            to="cart"
            className={({ isActive }) =>
              isActive ? classes.cartActive : undefined
            }
          >
            <button className={classes.cartBtn}>Cart {totalQuantity}</button>
          </NavLink>

          <NavLink className={classes.menuAction} to="cart">
            <i className="fa-solid fa-cart-shopping"></i>
          </NavLink>
        </div>
      </nav>
    </>
  );
};

export default MainNavigation;
