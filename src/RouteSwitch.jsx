import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App';
import Products from './components/Products';
import Contact from './components/Contact';
import ShoppingCart from './components/ShoppingCart';

const RouteSwitch = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/products" element={<Products />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/shopping-cart" element={<ShoppingCart />} />
      </Routes>
    </BrowserRouter>
  );
};

export default RouteSwitch;
