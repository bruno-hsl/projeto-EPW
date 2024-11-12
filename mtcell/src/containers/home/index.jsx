import React from 'react';
import { Titulo } from './styles';
import  NavBar  from '../../components/Nav-bar';
import Rodape from '../../components/footer';


function Home() {
  return (
    <div>
      <NavBar />
      <Titulo>home</Titulo>
      <Rodape />
    </div>
  );
}

export default Home;