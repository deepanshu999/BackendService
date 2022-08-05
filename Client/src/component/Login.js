import React from 'react';
import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import loginpic from "../images/login.svg";
import { NavLink } from 'react-router-dom';
import '../App.css';


const Login = () => {

    let homePage = useNavigate();
    let logInPage = useNavigate();
  
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const handleEmail = (e) => {
      setEmail(e.target.value);
  }

  const handlePassword = (e) => {
      setPassword(e.target.value);
  }

  const handleApi = (e) => {
      console.log({ email, password });
      e.preventDefault();
      axios.post('https://localhost:7036/api/Auth', {
          email: email,
          password: password,
      })
          .then(result => {
              //console.log(result.data);
              homePage('/weather');
             // localStorage.setItem('token' , result.data.token);
          })
          .catch(error => {
              console.log(error);
              alert('Please Fill Correct Email and Password');
              logInPage('/');
          })

  }
  
  return (
      <section className="sign-in">
        <div className='bubbles'>
          <span></span>
          <span></span>
          <span></span>
          
          <div className="container1 mt-5">
            <div className="signin-content">
                  
                  <div className="signin-image">
                  <div className='img-wrapper'>
                    <figure>
                      <img src={loginpic} alt="Login pic" />
                    </figure>
                    </div>
                    <NavLink to="/Form" className="signin-image-link">Create an account</NavLink>
                  </div>

               <div className="signin-form">
                  <h2 className="form-title">Log In</h2>
                  <form className="register-form" id="register-form">


                     <div className="form-group">
                       <label htmlFor="email">
                         <i className="zmdi zmdi-email material-icons-name"></i>
                       </label>
                       <input type="email" name="email" id="email" autoComplete='off' placeholder='Your Email' value={email} onChange={handleEmail}/>
                     </div>

                     <div className="form-group">
                       <label htmlFor="password">
                         <i className="zmdi zmdi-lock material-icons-name"></i>
                       </label>
                       <input type="password" name="password" id="password" autoComplete='off' placeholder='Your Password' value={password} onChange={handlePassword}/>
                     </div>
                      
                      <div className="form-group form-button" >
                        <input type="submit" name="signin" id="signin" className="form-submit" value="Login" onClick={handleApi}/>
                      </div>
                  </form>
                  </div>
                  
                  
            </div>
          </div>
          <span></span>
          <span></span>
          <span></span>
          </div>
       </section>
  )
};

export default Login;
