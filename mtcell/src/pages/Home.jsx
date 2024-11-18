import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Card from '../components/Card';
import Mt from '../components/Mt';

function Home() {
  return (
    <div>
      <Navbar/>
      <Card/>
      <Mt/>
      <Footer/>
    </div>
  );
}

export default Home;