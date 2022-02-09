import React from "react";
import styled from 'styled-components';
import Logo from './/Festinalogo.jpg';
import { BiHeart } from 'react-icons/bi';

function SubHeader2() {

  return (

        <Container>
         <Menu>
         <a href="#"><span>Glami.sk</span></a>
         <p>/</p>
         <a href="#"><span>Modne znacky</span></a>
         <p>/</p>
         <span>Festina</span>
         </Menu>
         
         <MenuImages>
           <Festina>
           <img src= {Logo} alt="logo"></img>
           <span>FESTINA</span>
           </Festina>
           
           <Hearth>
             <Boom>
             <span><BiHeart /></span>
             <p>4</p>
             
             </Boom>
             
             

           </Hearth>

         </MenuImages>
         


        </Container>
  );
}


export default SubHeader2;

const Container = styled.div`
   width: 100%;
   height: 140px;
   background-color: rgba(197, 197, 197, 0.44);
   border-bottom: 1px solid rgba(109, 106, 106, 0.44);
   border-top: 1px solid rgba(109, 106, 106, 0.44);
  }


`

const Menu = styled.div`
   display: flex;
   justyfi-content: center; 
   margin-left: 442px;
   font-size: 12px;


a {
    text-decoration: none;
    color: rgba(60, 59, 59, 0.44);  
    
  }
  
a:hover {
   
    color: rgba(97, 233, 97, 0.44);   

}
      

  p {
     color: rgba(60, 59, 59, 0.44);
     margin: 0px;
  }
   
  
  `

const MenuImages = styled.div`
  display: flex;
  justyfi-content: center;   

`
const Boom = styled.div`
   width: 40px;
   height: 40px;
   
 p {
  margin-top: 2px;
  margin-left: 10px;
 }  
  
 span:hover {
  color: grey;
} 

   `

const Hearth = styled.div`
   display: flex;
   fistyfi-content: center;
   margin-left: 920px;
   margin-top: 28px;
   
span {
    font-size: 30px;
    height: 30px;
    display: flex;
    align-items: center;
   
  }
    
  

 ` 
   

const Festina = styled.div`
    display: flex;
    justyfi-content: center;
    align-items: center;
    margin-left: 436px;
    margin-top: 20px;

    width: 80px;
    height: 80px;
    border-radius: 50%; 
  
    img {

    width: 80px;
    height: 80px;
    object-fit: cover;
    border-radius: 50%;
  } 
    span {
    
     font-size: 26px;
     letter-spacing: 2px;
     
    } 


`