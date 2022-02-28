import React from "react";
import styled from "styled-components";
import HeaderOne from "../Components/Header";
import Footer from "../Components/Footer";
import "../StyleCSS/style_css.css";
import { Link } from "react-router-dom";
import { GrUserExpert } from "react-icons/gr"
import DataJason from "../Data.json";
import { useState } from "react";

export default function Main() {
  
  const [ searchValue, setSearchValue ] = useState("");
   
  
     
  return (
      <div>
        <HeaderOne />
           <div className="main-page-css">
             <section className="main-page-form">
               
              <div className="user-account">
               <span><GrUserExpert /></span>
              <Link to="/Login">
               <p>Log out</p>
               </Link>
               <a href="#">Account</a>
              </div>
            
             <div className="search-input">
              <h4>Here the search begins, Good luck</h4>
              <input type="text" onChange={event =>{setSearchValue(event.target.value)}}></input>
             </div>
                            
             <div className="search-result"> 
               {DataJason.map((searchValue, index) => {
                 return <p>{searchValue.FirstName}</p>
               })}                  
             </div>
            
             </section>
           </div>
            
        <Footer />
      </div>
       
  )
}