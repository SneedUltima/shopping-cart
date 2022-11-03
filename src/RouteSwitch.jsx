import { BrowserRouter } from 'react-router-dom';
import { Routes, Route } from 'react-router-dom';
import { ShoppingCartProvider } from './components/ShoppingCartContext';
import App from './App';
import Products from './components/Products';
import Contact from './components/Contact';
import ShoppingCart from './components/ShoppingCart';
import NavBar from './components/NavBar';

const RouteSwitch = () => {
  return (
    <ShoppingCartProvider>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/products" element={<Products />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/shopping-cart" element={<ShoppingCart />} />
        </Routes>
      </BrowserRouter>
    </ShoppingCartProvider>
  );
};

export default RouteSwitch;
