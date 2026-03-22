import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
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
import Layout from './Layout';
import ProductDetail from './ProductDetail';
import Invoice from './Invoice';
import Myorder from './Myorder';
import Bag from './Bag';
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

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route index element={<Home />} />
          <Route path="new-in" element={<NewIn />} />
          <Route path="Sign" element={<SignUp />} />
          <Route path="login" element={<Login />} />
          <Route path="/productDetail/:id" element={<ProductDetail />} />
          <Route path="Invoice" element={<Invoice />} />
          <Route path="collections" element={<Collections />} />
          <Route path="Myorder" element={<Myorder />} />
          <Route path="premium" element={<PremiumBrandLanding />} />
          <Route path="/bag" element={<Bag />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;