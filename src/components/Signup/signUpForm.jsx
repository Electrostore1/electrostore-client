 import "./signup.css"
import React, { useState } from 'react';
import Cookies from 'js-cookie';

const SignUpForm = () => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [city, setCity] = useState('');
  const [address, setAddress] = useState('');
  const [password, setPassword] = useState('');

    const validateForm = () => {
    let isValid = true;

    // validate full name
    if (!/^[a-zA-Z]+$/.test(fullName)) {
      alert('Invalid name. Name should contain only letters.');
      isValid = false;
    }

    // validate email
    if (!/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
      alert('Invalid email.');
      isValid = false;
    }

    // validate phone
    if (!/^\d{11}$/.test(phone)) {
      alert('Invalid phone number. Phone number should contain 10 digits.');
      isValid = false;
    }

    // validate password
    if (!/^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,}$/.test(password)) {
      alert('Invalid password. Password should contain at least 8 characters, including a digit, alphabet, and special character.');
      isValid = false;
    }

    return isValid;
  };

  const handleSubmit = async(event) => {
    const valid= validateForm()
      console.log(valid)
    if(valid)
    
    console.log(fullName,password,phone,email)
    event.preventDefault();
   const response = await fetch('http://localhost:8080/signup',{
      method:"post",
      body:JSON.stringify( {
        name: fullName,
        email: email,
        password: password,
        address: address,
        mobile:phone,
        city:city
      }), 
      headers: {
        "Content-type": "application/json; charset=UTF-8"
    }
    })
    const data= await response.json()
    console.log("data", data  )

    Cookies.set('token', data.token, { expires: 7 })
    Cookies.get();
    event.preventDefault();

   /* if (validateForm()) {
      // submit form here
    }*/
  };

  return (
    <div className="container">
      <div className="screen">
        <div className="screen__content">
          <h1 style={{ textAlign:"center" , paddingTop: "18%", paddingRight:"39%", color:"#5C5696"}}> Sign Up</h1>
          <form className="login" onSubmit={handleSubmit}>
            <div className="login__field">
              <i className="login__icon fas fa-user"></i>
              <input type="text" className="login__input" placeholder="Full Name" onChange={(event)=>{ setFullName(event.target.value)}}/>
            </div>
            <div className="login__field">
              <i className="login__icon fas fa-user"></i>
              <input type="text" className="login__input" placeholder="Email" onChange={(event)=>{ setEmail(event.target.value)}}/>
            </div>
             <div className="login__field">
              <i className="login__icon fas fa-user"></i>
              <input type="text" className="login__input" placeholder="Phone Number" onChange={(event)=>{ setPhone(event.target.value)}}/>
            </div>

            <div className="login__field">
              <i className="login__icon fas fa-user"></i>
              <input type="text" className="login__input" placeholder="City" onChange={(event)=>{ setCity(event.target.value)}}/>
            </div>
            <div className="login__field">
              <i className="login__icon fas fa-user"></i>
              <input type="text" className="login__input" placeholder="Address" onChange={(event)=>{ setAddress(event.target.value)}}/>
            </div>
            <div className="login__field">
              <i className="login__icon fas fa-user"></i>
              <input type="text" className="login__input" placeholder="Password" onChange={(event)=>{ setPassword(event.target.value)}}/>
            </div>
            <div className="login__field">
              <i className="login__icon fas fa-user"></i>
              <input type="text" className="login__input" placeholder="Confirm Password"/>
            </div>
           
            <button className="button login__submit" type="submit">
              <span className="button__text">Sign Up</span>
              <i className="button__icon fas fa-chevron-right"></i>
            </button>
          </form>
          
        </div>
        <div className="screen__background">
          <span className="screen__background__shape screen__background__shape4"></span>
          <span className="screen__background__shape screen__background__shape3"></span>
          <span className="screen__background__shape screen__background__shape2"></span>
          <span className="screen__background__shape screen__background__shape1"></span>
        </div>
      </div>
    </div>
  )
}

export default SignUpForm;
