import React from 'react';
import styled from 'styled-components';
import Logo from './AppStore.jpg';
import Logo2 from './GooglePlay.jpg';
import { SiInstagram } from 'react-icons/si';
import { RiFacebookCircleLine } from 'react-icons/ri';

function Footer() {

      return (

           <Container>
              <Wrap>
              <FirstFooter>
                 <h3>O GLAMI.SK</h3>
                 <a href="#">Ako Glami.sk funguje</a>
                 <a href="#">Kontaktujte nas</a>
                 <a href="#">Pridat obchod</a>
                 <a href="#">Volne miesta</a>
                 <a href="#">Podmienky pouzivania</a> 

              </FirstFooter>
          
              <SecondFooter>

                 <h3>APLIKACIA GLAMI.SK</h3>
                 <a href="#">S appkou GLAMI máš módne inšpirácie hneď po ruke! Nové<br></br> kúsky, kolekcie, zľavy - toto všetko na jednom mieste a<br></br> zadarmo!</a>

              
               
              <LogoImages>
                 <Image>
                   <a href="#"><img src= {Logo} alt="aplle"></img></a> 
                 </Image>
                
                 <Image>
                   <a href="#"><img src= {Logo2} alt="play"></img></a> 
                 </Image>
              
              </LogoImages>
               
              </SecondFooter>
              
              <ThredFooter>
              
              <Country>
                 <h3>KRAJINA</h3>                     
                 <select>
                    <option value="SK" selected>Slovenska republika</option>
                    <option value="CZ">Ceska republika</option>
                    <option value="DE">Nemecka republika</option>
                    <option value="AU">Rakuska republika</option>
                    <option value="PL">Polska republika</option>

                 </select>
               </Country>  
                  <p>Fasion inspiration group</p>
                  <a href="#">www.ispigroup.coms</a>

               </ThredFooter>
               </Wrap>  

               <FourthFooter>
                 <a href="#"><spam>GLAMI</spam></a>
                 <p>Aktuálne nájdete na našom webe 1 630 358<br></br> produktov od 13 519 značiek.</p>
                 
                 <a href="#"><i><RiFacebookCircleLine /></i></a>
                 <a href="#"><i><SiInstagram /></i></a>
                  
              
               </FourthFooter> 
               
           
           </Container>
      
      
        );

}

export default Footer;

const Container = styled.div`
     background-color: black;
     width: 100%;
     height: 466px;
     margin-top: 86px;
     

     `

const Wrap = styled.div`
     display: flex;
     justyfi-content: center;
     align-content: center;
     grid-gap-row: 100px;
     grid-gap-column: 100px;
`

const FirstFooter = styled.div`
     margin-top: 42px;  
     margin-left: 266px;
     height: 226px;
     h3 {

      color: grey;
      font-size: 12px;
      

    }

    a {
      text-decoration: none;
      color: white;
      display: flex;
      font-size: 14px;
    } 

    `

const SecondFooter = styled.div`
       margin-top: 42px; 
       margin-left: 266px;
       height: 226px;
       h3 {
    color: grey;
    font-size: 12px;
    margin-left: 116px;
   }

   a {
    text-decoration: none;
    color: white;
    display: flex;
    font-size: 14px;
    text-align: center;
   }
   `    

   const LogoImages = styled.div`
        display: flex;
        justyfi-content: center;
   `

   const Image = styled.div`
        
        width: 180px;
        height: 66px;
        
       img:hover {
         width: 175px;
         height: 65px;
         transition-duration: 0.3;
        }
         
        }     
   
       img {

          width: 170px;
          height: 60px;
          margin-left: 8px;
          border-radius: 2px;
          margin-top: 14px;
          
        }
          

        `

const Country = styled.div`
     h3 {
        color: grey;
        font-size: 12px;
     }

     select {
        width: 216px;
        height: 40px
        
     } 
      
     option {
       background-color: grey;
     }
    
     `        

const ThredFooter = styled.div`
     margin-top: 42px;
     margin-left: 266px;
     height: 226px;
     p {
     color: white;
     font-size: 14px;
     margin-top: 14px;
     margin-bottom: 0px;
   } 
     
   a {
   color: white;
   font-size: 14px; 
  }
  
   `

const FourthFooter = styled.div`
      margin-right: 186px;   
      text-align: center;
      a {
        color: white;
        text-decoration: none;
      }   
    
      spam {

        font-size: 26px;
      } 
      
      p {
        color: white;
        font-size: 14px;

      }
      
      i {
        font-size: 20px;
        margin-left: 2px;
        
      }
      
      
      `   
