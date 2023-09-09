import classes from "./Error.module.css";

const Error = () => {
  return (
    <>
      <div className={classes.ErrorContainer}>
        <h1>An Error Occured</h1>
        <p>Could not find the page .</p>
      </div>
    </>
  );
};

export default Error;
