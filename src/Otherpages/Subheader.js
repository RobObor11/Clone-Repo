import React from "react";
import styled from "styled-components";
import SubOption from "./Subdetail/SubDetail";

function SubHeader() { 

  return (

    <Container>
                 
       <SubOption />
      
    </Container>

  );
}

export default SubHeader;

const Container = styled.div`
height: 70px;
width: 40%;
background-color: white;
display: flex;
justify-content: center;
align-items: center;
font-size: 8px;
margin-left: 34px;

`