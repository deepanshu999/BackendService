import React from 'react';
import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import signpic from "../images/Signup.svg";

const Signup = () => {

    let logInPage = useNavigate();

    const [name, setName] = useState();
    const [email, setEmail] = useState();
    const [phone, setPhone] = useState();
    const [password, setPassword] = useState();
    const [confirmpassword, setCPassword] = useState();

    const handleName = (e) => {
        setName(e.target.value);
    }

    const handlePhone = (e) => {
        setPhone(e.target.value);
    }

    const handleEmail = (e) => {
        setEmail(e.target.value);
    }

    const handlePassword = (e) => {
        setPassword(e.target.value);
    }

    const handleCPassword = (e) => {
      setCPassword(e.target.value);
    }

    const apiHandle = (e) => {
        console.log({ name, phone, email, password, confirmpassword });
        e.preventDefault();
        axios.post('https://localhost:7036/api/Auth/register',
            {
                name: name,
                email: email,
                phone: phone,               
                password: password,
                confirmpassword: confirmpassword
            })
            .then(result => {
                console.log(result);
                logInPage('/');
            })
            .catch(error => {
                console.log(error);
                alert('Please Fill in Required Informations');
            })
    }


  return (
       <section className="signup">
         <div className='bubbles'>
          <span></span>
          <span></span>
          <span></span>
          <span></span>

          <div className="container1 mt-5">
            <div className="signup-content">
              
               <div className="signup-form">
                  <h2 className="form-title">Sign up</h2>
                  <form className="register-form" id="register-form">
                     <div className="form-group">
                       <label htmlFor="name">
                         <i className="zmdi zmdi-account material-icons-name"></i>
                       </label>
                       <input type="text" name="name" id="name" autoComplete='off' placeholder='Your Full Name' value={name} onChange={handleName}/>
                       
                     </div>

                     <div className="form-group">
                       <label htmlFor="email">
                         <i className="zmdi zmdi-email material-icons-name"></i>
                       </label>
                       <input type="email" name="email" id="email" autoComplete='off' placeholder='Your Email' value={email} onChange={handleEmail}/>
                       
                     </div>

                     <div className="form-group">
                       <label htmlFor="phone">
                         <i className="zmdi zmdi-phone-in-talk material-icons-name"></i>
                       </label>
                       <input type="number" name="phone" id="phone" autoComplete='off' placeholder='Your Phone' value={phone} onChange={handlePhone}/>
                       
                     </div>

                     <div className="form-group">
                       <label htmlFor="password">
                         <i className="zmdi zmdi-lock material-icons-name"></i>
                       </label>
                       <input type="password" name="password" id="password" autoComplete='off' placeholder='Your Password' value={password} onChange={handlePassword}/>
                       
                     </div>

                     <div className="form-group">
                       <label htmlFor="cpassword">
                         <i className="zmdi zmdi-lock material-icons-name"></i>
                       </label>
                       <input type="password" name="confirmpassword" id="confirmpassword" autoComplete='off' placeholder='Confirm Your Password' value={confirmpassword} onChange={handleCPassword}/>
                       
                     </div>
                      
                      <div className="form-group form-button">
                        <input type="submit" name="signup" id="signup" className="form-submit" value="register" onClick={apiHandle}/>
                      </div>
                  </form>
                  </div>
                  
                  <div className="signup-image">
                  <div className='img-wrapper'>
                    <figure>
                      <img src={signpic} alt="registration pic" />
                    </figure>
                    </div>
                    <NavLink to="/Login" className="signup-image-link">I am already register</NavLink>
                  </div>
            </div>
          </div>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          </div>
       </section>
  )
};

export default Signup;