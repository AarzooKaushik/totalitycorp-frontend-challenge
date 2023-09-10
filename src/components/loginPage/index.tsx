import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import classes from './style.module.css';

const Login= () => {
const navigate = useNavigate();
 
const [enteredUserName, setEnteredUserName] = useState<string>(""); 
  const [userNameIsValid, setUserNameIsValid] = useState<boolean>(true);
  const [numberIsValid, setNumberIsValid] = useState<boolean>(true); 
  const [enteredNumber, setEnteredNumber] = useState<string>(""); 


  useEffect(() => {
    const userDetails = localStorage.getItem("userDetails");
    if (userDetails) { 
      navigate("/shop");
    }
  }, [navigate]);


  const userNameChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUserNameIsValid(true);
    setEnteredUserName(event.target.value);
  };

  const numberChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNumberIsValid(true);
    setEnteredNumber(event.target.value);
  };

  const loginHandler = async () => {
   
    const userDetail = {
      username: enteredUserName,
      number: enteredNumber,
    };
    localStorage.setItem(
      "userDetails",
      JSON.stringify({ ...userDetail })
    );
    navigate("/shop");

    }
  
  const formSubmitHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (enteredUserName.trim() === "") {
      setUserNameIsValid(false);
    }
    if (enteredNumber.trim() === "") {
      setNumberIsValid(false);
    }


    if (enteredUserName.trim() === "" || enteredNumber.trim() === ""){
      navigate('/')
      return
    };
   
    loginHandler();
  };

 

  return (
    <>
    <div className={classes.loginPage}>
      <h1>Login Form</h1>
      <form onSubmit={formSubmitHandler} className={classes.form}>
        <input
          type="text"
          placeholder="Enter Username"
          onChange={userNameChangeHandler}
        />
         <p className={classes.errorText}>{!userNameIsValid && 
         ' Please enter a valid Username .'
        }</p>
        <input
          type="number"
          placeholder="Enter Number"
          onChange={numberChangeHandler}
        />
    
         <p className={classes.errorText}>{!numberIsValid && 
         ' Please enter a valid Number .'
        }</p>
          <button>Login</button>
          
      
      </form>
      </div>
    </>
  );
};

export default Login;