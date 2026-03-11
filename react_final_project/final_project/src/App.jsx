 import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link, Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import { HeroCarousel } from './HeroCarousel';
import CombinedStoreFront from './CombinedStoreFront';
import StoreFront from './StoreFront';
import NewArrivalsPage from './NewArrivalsPage';
import ProductGrid from './ProductGrid';
import LouisPhilippeHero from './LouisPhilippeHero';
import ExtraSections from './ExtraSections';
import PremiumBrandLanding from './PremiumBrandLanding';
import './App.css';

import SignUp from './SignUp'
import Login from './Login'

// 1. Layout Component: Jo Header/Footer ko fix rakhega
function Layout() {
  return (
    <>
      <Header />
      <Outlet />  {/* Yahan par niche waale pages load honge */}
      <Footer />
    </>
  );
}

// 2. Alag-alag Pages ke Groups
const Home = () => (
  <>
    <HeroCarousel />
    <CombinedStoreFront />
    <StoreFront />
  </>
);

const NewIn = () => (
  <>
    <NewArrivalsPage />
    <ProductGrid />
  </>
);

const Collections = () => (
  <>
    <LouisPhilippeHero />
    <ExtraSections />
  </>
);

// 3. Main App Function
function App() {
  return (
    <Router>
      <Routes>
        {/* Layout ke andar jo bhi Route aayega, usme Header/Footer rahega */}
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="new-in" element={<NewIn />} />
          <Route path="Sign" element={<SignUp />} />
          <Route path="login" element={<Login />} />
          <Route path="collections" element={<Collections />} />
          <Route path="premium" element={<PremiumBrandLanding />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;