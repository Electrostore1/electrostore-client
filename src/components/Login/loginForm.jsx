import "./login.css"
import React, { useState } from 'react';
import Cookies from "js-cookie";

import { useNavigate  } from 'react-router-dom';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();


  const validateForm = () => {
    let isValid = true;


    // validate email
    if (!/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
      alert('Invalid email.');
      isValid = false;
    }


    // validate password
    if (!/^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,}$/.test(password)) {
      alert('Invalid password. Password should contain at least 8 characters, including a digit, alphabet, and special character.');
      isValid = false;
    }

    return isValid;
  };

  const handleSubmit = async  (event) => {
    const valid= validateForm()
    console.log(valid)
    if(valid){
    console.log(email,password)
    event.preventDefault();
    const response = await fetch('http://localhost:8080/login',{
      method:"post",
      body:JSON.stringify( {
        email: email,
        password: password,
       
      }), 
      headers: {
        "Content-type": "application/json; charset=UTF-8"
    }
    })
    const data= await response.json()
    console.log("data", data  )
    Cookies.set('token', data.token, { expires: 7 })
    Cookies.get();
    const w=Cookies.get();
    console.log('jwt',w)
    navigate('/');
  }
    event.preventDefault();


    // if (validateForm()) {
    //   // submit form here
    // }
  };

  return (
    <div className="container">
      <div className="screen">
        <div className="screen__content">
          <h1 style={{ textAlign:"center" , paddingTop: "18%", paddingRight:"39%", color:"red"}}>Log In</h1>
          <form className="login" onSubmit={handleSubmit}>
            <div className="login__field">
              <i className="login__icon fas fa-user"></i>
              <input type="email" className="login__input" placeholder="Email" onChange={(event)=>{ setEmail(event.target.value)}}/>
            </div>
            <div className="login__field">
              <i className="login__icon fas fa-lock"></i>
              <input type="password" className="login__input" placeholder="Password" onChange={(e)=>{setPassword(e.target.value)}}/>
            </div>
            <button className="button login__submit">
              <span className="button__text">Log In Now</span>
              <i className="button__icon fas fa-chevron-right"></i>
            </button>
          </form>
          
        </div>
        <div className="screen__background">
          {/* <span className="screen__background__shape screen__background__shape4"></span> */}
          <span className="screen__background__shape screen__background__shape3"></span>
          <span className="screen__background__shape screen__background__shape2"></span>
          <span className="screen__background__shape screen__background__shape1"></span>
        </div>
      </div>
    </div>
  )
}

export default LoginForm;

