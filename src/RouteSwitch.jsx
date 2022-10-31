import { BrowserRouter } from 'react-router-dom';
import AnimatedRoutes from './components/AnimatedRoutes';
import NavBar from './components/NavBar';

const RouteSwitch = () => {
  return (
    <BrowserRouter>
      <NavBar />
      <AnimatedRoutes />
    </BrowserRouter>
  );
};

export default RouteSwitch;
