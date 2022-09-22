import React from 'react'
import Footer from './Components/Footer';
import Info from './Components/Info';
import Layout from './Components/Layout';
import Navbar from './Components/Navbar';

function App() {
  return (
    <div className='font-nunito bg-background'>
      <div className='bg-hero-pattern bg-cover'>
      <Info/>
     <Navbar/>
      </div>
     <Layout/>
     <Footer/>
    </div>
  );
}

export default App;
