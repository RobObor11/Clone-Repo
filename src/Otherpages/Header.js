import React, { Component } from "react";
import styled from "styled-components";
import { BiSearch, BiCamera, BiUser, BiHeart } from 'react-icons/bi';


function Header() {  

    return (
           
      <Container>
         <ComponentWrap>
         <Logo>
          <a href="#"><span>GLAMI</span></a>
         </Logo>
          
         <ComponentsMenu>
          <a href="#"><span>Muzi</span></a> 
          <a href="#"><span>Zeny</span></a> 
          <a href="#"><span>Deti</span></a>
         </ComponentsMenu> 
         
         
         </ComponentWrap>
        
         <SearchBar>
          <p><BiSearch /></p><i><input type="text" placeholder="Vyberaj z viac ako tisic znaciek a milionov produktov" name="Search"/>
                    <button type="submit"><span><BiCamera/></span></button></i>
           
         </SearchBar>

         <UserIcon>
          <i><a href="#"><BiUser /></a><a href="#"><BiHeart /></a></i>
          

         </UserIcon>

         
      </Container>

      

      );

}

export default Header;

const Container = styled.div`
  height: 70px;
  width: 100%;
  background-color: black;
  display: flex;
  justify-content: center;
  align-items: center;
  
 

`

const Logo = styled.div`
  margin: 20px 10px;
  
  a {
    text-decoration: none;
    font-size: 30px;
    color: white;
  }

`
const ComponentsMenu = styled.div`
margin: 29px 10px;

a {
  text-decoration: none;
  color: rgb(60, 57, 57);
  font-size: 15px;
  margin: 0px 10px;
}

a:hover {
  color: white;
}


`



const SearchBar = styled.div`
  margin: 40px 10px;  
  display: flex;
  justyfi-content: center;
  align-items: center;
  

  i {
    color: black;
    background-color: white;
    font-size: 25px;
    display: flex;
    align-items: center;
  }

  
  input[type=text] {
    border: none;
    outline: none;
    font-size: 15px;
    padding: 0px;
    color: balck;
    text-align: center;
    width: 400px;
    display: flex;
    justyfi-content: center;
    align-items: center;

  }
  
  span {
    color: black;
    font-size: 25px;
    border: none;
    background-color: white;
  }
    
  span::hover {
    background-color: white;
  }

  p {
    color: black;
    background-color: white;
    font-size: 28px;
    
  }

  button {
    color: white;
    background-color: white;
    border: none;
    padding: 0px;
    margin-top: 6px;
    cursor: pointer;
  }


  `
  


 const UserIcon = styled.div`
    margin-left: 150px;
    color: white;
    font-size: 26px;
  a {
    text-decoration: none;
    color: white;
  }
 
    `

 const ComponentWrap = styled.div`
     display: flex;
     justyfi-content: center;
     margin-right: 100px;
 `