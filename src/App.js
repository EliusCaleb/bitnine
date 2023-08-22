import React from 'react'
 import TopBar from './components/TopBar';
import Navbar from './components/Navbar';
//import Navigation from './components/Navigation';
import { Routes,Route } from 'react-router-dom';
import Product from './pages/Product';
import Footer from './components/Footer';


function App() {
  return (
   <div>
    <TopBar/>
    <Navbar/>
    <Routes>
      <Route  path='/home' element={<Product/>} />
    </Routes>
    <Footer/>
   </div>
  );
}

export default App;
