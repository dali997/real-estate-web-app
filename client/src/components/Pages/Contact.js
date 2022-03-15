import React from "react";
import emailjs from '@emailjs/browser';
import { Link } from 'react-router-dom'

const Contact = () => {
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_fp3l0b3', 'template_xsri48m',e.target, 'user_sLJAyYAU2SAC3CCS2rk8U')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset()
  };
    return(
      <div className="container">
      <form   onSubmit={sendEmail}>
       
      <label  style={{fontWeight:"bold", color:'white'}}> Enter your Name:</label>
      <br/>
      <br/>
      <input className="label1" type="text" name="user_name" placeholder="enter your name here "  />
      <br/>
      <br/>
      <br/>
      <hr/>
      <label style={{fontWeight:"bold", color:'white'}}>Email:</label>
      <br/>
      <br/>

      <input  className="label1" type="email" name="user_email" placeholder="enter your mail here " />
      <br/>
      <br/>
      <br/>

      <hr/>
      <label style={{fontWeight:"bold", color:'white'}} >Message:</label>
      <br/>
      <br/>

      <textarea className="label1" style={{height:"150px"}} name="message" placeholder="enter your information here "/>
      <br/>
      <hr/>
      <input className="send"  type="submit" value="Send" />
      <br/>
     <Link to="/products"> <button className="send">go back</button></Link>

      </form>
      </div>
    )
}


export default Contact;