import React, { useState } from 'react';
import Signup from "./Signup";
import SignupFormSuccess from './SignupFormSuccess';
const Form = () => {
    const [formIsSubmitted, setFormIsSubmitted] = useState(false);

    const submitForm =() => {
        setFormIsSubmitted(true);
    };
    return ( 
    <div>
        { !formIsSubmitted ? (<Signup submitForm={submitForm}/>
        ) : (
        <SignupFormSuccess />
        )} 
        </div>
    );
    
};

export default Form;