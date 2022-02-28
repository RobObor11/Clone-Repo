import React from "react";
import styled from "styled-components";
import "../StyleCSS/style_css.css";
import HeaderOne from "../Components/Header";
import Footer from "../Components/Footer";
import { Link } from "react-router-dom";
 
export default function Login() {
  return (
        
        <div>
            <HeaderOne />

        <div className="login-css">
          <section className="login-main">
           
            <p>User Name</p>
            <input className="input-text" type="text" placeholder="Enter valid user name" maxLength="22"></input>
            
            <p>User Password</p>
            <input className="input-password" type="password" placeholder="Enter valid password" maxLength="12"></input>
           
            <div className="submit-button">
            <Link to="/MainPage">
              <button type="submit">Submit</button>
            </Link>
            </div>
           
           <div className="register">
            <Link to="/RegisterPage" className="link-register">
             Click here to register
            </Link>

           </div>
             
           <div className="language">
             
            <label for="lang">Select language</label>
            <select name="lang">
             <option value="slovakia">Slovakia</option>
             <option value="english">English</option>

            </select>
                   
           </div> 
          
          </section> 
       
        </div>
  
         <Footer />

        </div>
  )


}



