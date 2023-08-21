import React, { Component} from 'react'
import './Contact.css'




export default class Contact extends React.Component {

state = {
    Name:'',
    Email:'',
    Subject:'',
    Message:'',
}
 
    
handleSubmit =(e)=> {
    e.preventDefault();
    console.log(this.state)
  
}


handleChange=(e)=>{
    const value = e.target.value;
    this.setState({ ...this.state, [e.target.name]: value });
}




render(){

    return (

        <div className="div-4 ">

            <div className="div-41">

                <div className="div-411 social-icon">
                    <a href="https://web.whatsapp.com/">
                        <img src="/Images/What's App Logo.png" alt="WhatsApp" />
                        <h6>WhatsApp</h6>
                    </a>
                </div>
                <div className="div-412 social-icon">
                    <a href="https://twitter.com/">
                        <img src="/Images/Twitter Logo.png" alt="Twitter" />
                        <h6>Twitter</h6>
                    </a>
                </div>
                <div className="div-413 social-icon">
                    <a href="https://www.facebook.com/">
                        <img src="/Images/Facebook Logo.png" alt="Facebook" />
                        <h6>Facebook</h6>
                    </a>
                </div>
                <div className="div-414 social-icon">
                    <a href="https://www.instagram.com/">
                        <img src="/Images/Insta Logo.png" alt="Instagram" />
                        <h6>Instagram</h6>
                    </a>
                </div>

            </div>

            <div className="div-42">
                <img src="./Images/Contact Background.png" alt="" />
            </div>

            <div className="div-43">
                <form onSubmit={this.handleSubmit} action="/action.php">
                    <label for="Name" className="form-label">Your Name (Required)</label>
                    <input onChange={this.handleChange} type="text" name="Name" id="Name" className="input-label" />

                    <label for="Email" className="form-label">Your Email (Required)</label>
                    <input onChange={this.handleChange} type="text" name="Email" id="Email" className="input-label" />

                    <label for="Subject" className="form-label">Subject</label>
                    <input onChange={this.handleChange} type="text" name="Subject" id="Subject" className="input-label" />

                    <label for="Message" className="form-label">Your Message</label>
                    <textarea onChange={this.handleChange} name="Message" id="Message" cols="30" rows="10" className="input-label"></textarea>

                    <input type="submit" value="Send" />
                </form>

            </div>


        </div>


    )
}
}

