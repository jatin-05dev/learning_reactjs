import React from 'react'; 
import Footer from './Footer';
import Header from './Header';
import { HeroCarousel } from './HeroCarousel';
import CombinedStoreFront from './CombinedStoreFront';
import StoreFront from './StoreFront';
import NewArrivalsPage from './NewArrivalsPage';
import ProductGrid from './ProductGrid';
import './App.css'
function App(){
  return (
 <>
 <Header/>
 
 {/* <HeroCarousel/>
 <CombinedStoreFront/>
 <StoreFront/>
 <br /> */}

 <NewArrivalsPage/>
 <ProductGrid/>
  <Footer/>

 </>   
  )
};

export default App;