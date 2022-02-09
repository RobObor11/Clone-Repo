import React from 'react';
import styled from 'styled-components';
import Image1 from './Fastina1.jpg';
import Image2 from './Festina2.jpg';
import Image3 from './Festina3.jpg';
import Image4 from './Festina4.jpg';
import Image5 from './Festina5.jpg';
import Image6 from './Festina6.jpg';
import Image7 from './Festina7.jpg';
import Image8 from './Festina8.jpg';


function Products() {

  return (
      
        <Container>
            
             
             <ImageWatch>
                 <img src= {Image1} alt="image1"></img>
                 <p>112 C</p>
                 <span>Do troch dni / Zadarmo</span>
                 <p>Festina</p>
                 <ImageHover>
                   <a href="#">Detail produktu</a>
                 </ImageHover>
                 
             </ImageWatch>

             <ImageWatch>
                 <img src= {Image2} alt="image1"></img>
                 <p>235 C</p>
                 <span>Do tyzdna / Zadarmo</span>
                 <p>Festina</p>
                 <ImageHover>
                   <a href="#">Detail produktu</a>
                 </ImageHover>
                 
             </ImageWatch>

             <ImageWatch>
                 <img src= {Image3} alt="image1"></img>
                 <p>158 C</p>
                 <span>Na sklade / Zadarmo</span>
                 <p>Festina</p>
                 <ImageHover>
                   <a href="#">Detail produktu</a>
                 </ImageHover>
                 
             </ImageWatch>

             <ImageWatch>
                 <img src= {Image4} alt="image1"></img>
                 <p>369 C</p>
                 <span>Do troch dni / Zadarmo</span>
                 <p>Festina</p>
                 <ImageHover>
                   <a href="#">Detail produktu</a>
                 </ImageHover>
                 
             </ImageWatch>
              
             <ImageWatch>
                 <img src= {Image5} alt="image1"></img>
                 <p>247 C</p>
                 <span>Do zajtra / Zadarmo</span>
                 <p>Festina</p>
                 <ImageHover>
                   <a href="#">Detail produktu</a>
                 </ImageHover>
                 
             </ImageWatch>

             <ImageWatch>
                 <img src= {Image6} alt="image1"></img>
                 <p>489 C</p>
                 <span>Do troch dni / Zadarmo</span>
                 <p>Festina</p>
                 <ImageHover>
                   <a href="#">Detail produktu</a>
                 </ImageHover>
                 
             </ImageWatch>

             <ImageWatch>
                 <img src= {Image7} alt="image1"></img>
                 <p>123 C</p>
                 <span>Do 2 tyzdnov / Zadarmo</span>
                 <p>Festina</p>
                 <ImageHover>
                   <a href="#">Detail produktu</a>
                 </ImageHover>
                 
             </ImageWatch>
            
             <ImageWatch>
                 <img src= {Image8} alt="image1"></img>
                 <p>89 C</p>
                 <span>Do troch dni / Zadarmo</span>
                 <p>Festina</p>
                 <ImageHover>
                   <a href="#">Detail produktu</a>
                 </ImageHover>
                 
             </ImageWatch>

        </Container>

  );
}

export default Products;

const Container = styled.div`
     display: grid;
     grid-template-columns: 208px 208px 208px 208px;
     grid-column-gap: 10px;
     grid-row-gap: 10px;
     align-items: center;
     margin-left: 626px;
     margin-top: -354px;
     `

const ImageWatch = styled.div`
    border: 1px solid rgba(197, 197, 197, 0.44);
    width: 200px;
    height: 346px;
    background-color: rgba(197, 197, 197, 0.44);
    margin-left: 22px;

    img {
      
      width: 200px;
      height: 246px;
      
    } 

   p {
     font-size: 12px;
     margin: 0px;
     font-weight: 700;  
   
    }
    
   span {
     font-size: 15px;
   }
    
   &:hover {

     box-shadow: 3px 3px 3px 3px rgba(158, 158, 158, 0.919);
     transition-duration: 0.3s;
   }
    
    `

const ImageHover = styled.div`
      margin-top: 10px;      
      width: 126px;
      height: 26px;    
      margin-left: 28px;
      background-color: rgba(11, 153, 151, 0.59);
      cursor: pointer;
      display: flex;
      align-items: center;

      a  {
       text-decoration: none;
       color: white;
       margin-left: 5px;
       
     }    
  

    `    

