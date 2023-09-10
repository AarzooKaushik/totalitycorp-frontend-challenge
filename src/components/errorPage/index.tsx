import React from "react";
import classes from "./style.module.css";

interface ErrorProps {}

const Error: React.FC<ErrorProps> = () => {
  return (
    <>
      <div className={classes.ErrorContainer}>
        <h1>An Error Occurred</h1>
        <p>Could not find the page.</p>
      </div>
    </>
  );
};

export default Error;