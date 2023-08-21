import React, { Component } from 'react'
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import './SignUp.css'

class SignUp extends Component {
    state={
        fullname:'',
        email:'',
        password:'',
    }

    handleSubmit=(e)=>{
        e.preventDefault();
        console.log(this.state.fullname);
        console.log(this.state.email);
        console.log(this.state.password);
    }


    handleChange=(e)=>{
        const value = e.target.value;
        this.setState({ ...this.state, [e.target.name]: value });
    }
    
    render() {
    return (

        <div className="div-2">
            <div className="div-21">
                <h1 className="Title-21">Company Name</h1>
                <p className="paragraph-21">
                    We will help You to manage Your business with ease and modern world technologies
                    </p>
                    <br></br>
                    <h3>Let's Start</h3>
            </div>

            <div className="div-22">
                <form onSubmit={this.handleSubmit}>
                    <div className="sign-up-box">
                    <div className="pic">
                        <img src="/images/user.png" alt="user icon" />
                        <h1 className="sign-up-Heading">CREATE ACCOUNT</h1>
                    </div>
                    <p>already have an account ? <a href="#" id="link-in-p">Sign In</a></p>
                    <br />
                    <input type="text" name="fullname" id="fullname" placeholder=" FullName"onChange={this.handleChange}required /> <br />
                    <br />
                    <input type="email" name="email" id="email" placeholder=" Email"onChange={this.handleChange}required /> <br />
                    <br />
                    <input type="password" name="password" id="password" placeholder="Password"onChange={this.handleChange} required /> <br />
                    <FormControlLabel control = {<Checkbox />} label = "I accept the Terms of Use & Privacy Policy." required /> 
                    <br />
                    <button onClick={this.changeState} className="sign-up-btn">Sign Up</button>
                    <p> Problem with signup <a href="/Contact" id="link-in-p"> Contact Us</a></p>
                    
                </div>
                </form>
            </div>
        </div>
    )
}
}

export default SignUp;



