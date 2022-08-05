const validation = (values) => {
    let errors={};

    if(!values.name){
        errors.name="Name is required."
    }
    if(!values.email){
        errors.email="Email is required."
    } else if(!/\S+@\S+\.\S+/.test(values.email)){
        errors.email="Email is invalid."
    }
    if(!values.phone){
        errors.phone="Phone number is required."
    }
    if(!values.password){
        errors.password="Password is required."
    } else if(values.password.length < 8){
        errors.password="Password must be greater than 8 characters."
    }
    if(!values.cpassword){
        errors.cpassword="Password is required."
    } else if(values.cpassword.length < 8){
        errors.cpassword="Password must be greater than 8 characters."
    }
    else if(values.password !== values.cpassword){
        errors.cpassword="Password do not match."
    }

    return errors;
};

export default validation;