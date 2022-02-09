import React from 'react';
import styled from 'styled-components';
import Women from './Women.jpg';
import Mens from './Mens.jpg';

function Next() {
    
  return (
      <Container>
         <WomenImage>
           <img src= {Women} alt="women"></img>
           <p>Zeny</p>
         </WomenImage>

         <MenImage>
           <img src= {Mens} alt="mens"></img>
           <p>Muzi</p>
         </MenImage>
      
      </Container>

  );
}

export default Next;

const Container = styled.div`
   display: flex;
   justify-content: center;

   
   
`
          
const WomenImage = styled.div`
    
    cursor: pointer;
    width: 530px;
    height: 60px;
    background-color: rgba(248, 248, 248, 0.919);     
    display: flex;
    align-items: center;
    border: 1px solid rgba(109, 106, 106, 0.44);
    border-radius: 4px;
    margin-top: 25px;
    margin-left: 10px;

  img { 
         width: 40px;
         height:40px;
         margin-top: 8px;

    }
 
    p {  font-size: 18px;

  }

   &:hover  {
          box-shadow: 3px 3px 3px 3px rgba(158, 158, 158, 0.919);
          transition-duration: 0.3s;

    }

    `

 const MenImage = styled(WomenImage)`
 
 `
   