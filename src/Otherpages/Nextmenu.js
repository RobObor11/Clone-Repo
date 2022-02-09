import React from 'react';
import styled from 'styled-components';

function Nextmenu() {

  return (
             
           <Container>
              <Men>
                <h4>Muzi</h4>
                <a href="#">Sperky a hodinky<p>84</p></a>
              </Men>

              <Women>
                <h4>Zeny</h4>
                <a href="#">Sperky a hodinky<p>173</p></a>
              </Women>

              <Choose1>
                <h4>Ponuka</h4>
                <label>
                <input type="checkbox"/>
                 Doprava domov<br></br>zadarmo<p>206</p>
                </label>
              </Choose1>
               
               <Choose2>
                <label>
                <input type="checkbox"/>
                 Zlavove kupony<p>12</p>
                </label>

               </Choose2>
           </Container>

  );
}
 
export default Nextmenu;

const Container = styled.div`
    margin-left: 426px;
`

const Men = styled.div`
    width: 184px;

    p {
       margin-left: 36px;
     }

    h4 {
        color: black;
        margin-top: 14px;
        margin-bottom: 8px;
    }
    a {
      display: flex;
      justyfi-content: center;
      align-items: center;
      text-decoration: none;
      color: grey;
      
    } 

    a:hover {
      color: rgba(97, 233, 97, 0.44);
    }

    `
const Women = styled(Men)`

`
const Choose1 = styled.div`
    width: 184px;

    label {
      display: flex;
      justyfi-content: center;
      align-items: center;
      color: grey;
    }     
    p {
      margin-left: 24px;
    }
     
    
    `  

const Choose2 = styled(Choose1)`

`    