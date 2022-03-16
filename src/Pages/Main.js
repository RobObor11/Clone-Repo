import React from "react";
import { styled } from '@mui/styles';
import ListItems from "./Components/List";

const Main = styled('div') ({
       backgroundColor: '#A8EB12',
       width: '100%',
       height: '100vh',
       position: 'relative',
});


export default function MainPage() {
  return (
       <Main>
         <ListItems />
       </Main>
  );
}