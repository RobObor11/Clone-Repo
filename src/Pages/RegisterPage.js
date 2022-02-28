import React from "react";
import styled from "styled-components";
import "../StyleCSS/style_css.css";
import HeaderOne from "../Components/Header";
import Footer from "../Components/Footer";
import { Link } from "react-router-dom";

export default function Register() {
  return (
       <div>
          <HeaderOne />
          <div className="register-css">
            <section className="register-form">
              <form>
                <h2>Register</h2>
                <p>Write user name here</p>
                <input type="text" placeholder="example - John589Doe"></input>
                 
                <p>Write email address here</p>
                <input type="email" placeholder="example@hotcar.co.uk"></input>

                <p>Your password here</p>
                <input type="password" placeholder="at least 12 digit"></input>

                <p>Retype password here</p>
                <input type="password" placeholder="retype"></input>
                
               <div className="register-button">
                 <button type="submit">Register</button>
               </div>

               <div className="back-to-login">
                <Link to="/Login" className="link-login">
                 Back to Login
                </Link>

               </div>

              </form>

            </section>
            </div>
          <Footer />
       </div>
  )
}