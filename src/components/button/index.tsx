import React, { ReactNode } from "react";
import classes from "./style.module.css";

interface ButtonProps {
  onClick?: () => void;
  children?: ReactNode; 
}

const Button: React.FC<ButtonProps> = (props) => {
  return (
    <button onClick={props.onClick} className={classes.btn}>
      {props.children}
    </button>
  );
};

export default Button;

