import React from 'react';
import styled from 'styled-components';


function Endpage() {

      return (
          
          <Container>
              <TextButton>
               <a href="#">Zobrazit dalsich 106 produktov</a>
               </TextButton>

               <Buttons>
               <input type="button" value="1"></input>
               <input type="button" value="2"></input>
               <input type="button" value=">"></input>
               </Buttons> 

          </Container>

      );

}


export default Endpage;

const Container = styled.div`
    margin-top: 106px;
    margin-left: 956px;
`         

const TextButton = styled.div`
      display: flex;
      align-items: center;
      
      height: 36px;
      width: 274px;
      background-color: rgba(11, 153, 151, 0.59);
      border-radius: 2px; 
  
      a { 
      text-decoration: none;
      color: white;
      font-size: 20px;
      
    }    
   
  a:hover {
      background-color: rgba(11, 153, 151, 0.323);
    } 
     
    

    `

const Buttons = styled.div`
      margin-top: 24px; 
      margin-left: 68px;

     input[type=button] {
         width: 28px;
         height: 28px;
         margin-left: 12px;
         background-color: white;
         border-radius: 2px;
        }

`    