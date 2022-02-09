import React from 'react';
import styled from 'styled-components';
import { BiSearch, BiFilter } from 'react-icons/bi';

function Next2() {

  return (

       <Container>
          <SearchBox>
             <p><BiSearch /></p>
             <input type="text" placeholder="Hladat v kategorii" name="Search"></input>

          </SearchBox>

          <Filter>
             <p><BiFilter /></p>
             <input type="button" name="filter" value="Filter"/>
             <p>1</p>
          </Filter>
       
          <FilterOrganization>
            <a href="#"><p>Velkost</p> ▼</a>
            <a href="#"><p>Znacka</p> ▼</a>
            <a href="#"><p>Farba</p> ▼</a>
            <a href="#"><p>Cena</p> ▼</a>
            <a href="#"><p>Zlavy</p> ▼</a>
            <a href="#"><p>Zlavy</p> ▼</a>

          </FilterOrganization>
       
          <OrganiFil>
            <spam>Zoradit podla: </spam> 
            <input type="button" name="select" value="Oblubene ♦"/>
          </OrganiFil>
          
       </Container>
  );
}


export default Next2;

const Container = styled.div`
   display: flex;
   justyfi-content: center;
   align-items: center;
   margin-top: 18px;
`
    


const SearchBox = styled.div`
      margin-left: 428px;
      display: flex;
      justyfi-content: center;
      align-items: center;
      border: 1px solid rgba(109, 106, 106, 0.44);
      width :215px;
      height: 35px;
      input[type=text] {
      width: 180px;
      height: 30px;
      font-size: 15px;
      border: none;
      outline: none;
    }

    p {
      font-size: 26px;
    }
`



const Filter = styled.div`
    margin-left: 10px;
    cursor: pointer;
    display: flex;
    justyfi-content: center;
    align-items: center;
    border: 1px solid;
    width: 160px;
    height: 46px;
    background-color: rgba(14, 187, 184, 0.741);
    color: rgb(255, 255, 255);
  }
    input[type=button] {
      width: 140px;
      height: 46px;
      font-size: 20px;
      border: none;
      outline: none;
      background-color: rgba(11, 153, 151, 0.59);
      cursor: pointer;
    }
      color: white;
    }

    p {
      font-size: 26px;
    }
    &:hover {
      background-color: rgba(11, 153, 151, 0.823);
      transition-duration: 0.3s;
    }

    `

const FilterOrganization = styled.div`
       display: flex;
       justyfi-content: center;
       align-items: center;


     p {
         
        color: black;
    } 

    a {
       text-decoration: none;
       color: grey;
       margin-left: 26px;
       display: flex;
       justyfi-content: center;
       align-items: center;
      }

`

const OrganiFil = styled.div`
       margin-left: 18px;

       spam {
         color: grey;
       }

       input[type=button]  {
       width: 80px;
       height: 40px;
       background-color: white;
       border-radius: 2px;
       border: none;
       outline: none;
       font-size: 14px;
       cursor: pointer;
      }

        
    `