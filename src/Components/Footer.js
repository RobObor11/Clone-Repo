import React from "react";
import styled from "styled-components";
import "../StyleCSS/style_css.css"
import { SiInstagram } from 'react-icons/si';
import { AiOutlineFacebook, AiOutlineApple } from 'react-icons/ai';
import { FiTwitter } from 'react-icons/fi';
import { RiGooglePlayLine } from 'react-icons/ri';

export default function Footer() {
  return (
           <div className="footer">
             <div className="footer-info">
               <h2>INFO</h2>
               <a href="#">Whats new</a>
               <a href="#">Where we heading</a>
               <a href="#">For you</a>
               <a href="#">Contact</a>

             </div>
             
              <div className="footer-contact">
                <a href="#"><SiInstagram /></a>
                <a href="#"><AiOutlineFacebook /></a>
                <a href="#"><FiTwitter /></a>
                <a href="#"><AiOutlineApple /></a>
                <a href="#"><RiGooglePlayLine /></a>
              </div>
           </div>
     
  )
}