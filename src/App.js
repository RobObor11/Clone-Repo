import React from 'react';
import './App.css';
import styled from 'styled-components';
import Header from './Otherpages/Header';
import SubHeader from './Otherpages/Subheader';
import SubHeader2 from './Otherpages/Subheader2';
import Next from './Otherpages/Next';
import Next2 from './Otherpages/Next2';
import Nextmenu from './Otherpages/Nextmenu';
import Products from './Otherpages/Products';
import Endpage from './Otherpages/Endpage';
import Footer from './Otherpages/Footer';


function App() {
  return (
       <Container>
          <Header />
          <SubHeader />
          <SubHeader2 />
          <Next />
          <Next2 />
          <Nextmenu />
          <Products />
          <Endpage />
          <Footer />
       </Container>   
    

  );
}

export default App;

const Container = styled.div`

`