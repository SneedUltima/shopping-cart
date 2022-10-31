import HeroSection from './components/HeroSection';
import './styles/LandingPage.css';
import { motion } from 'framer-motion';

function App() {
  return (
    <motion.div
      className="App"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{
        duration: 0.8,
        delay: 0.3,
        easeIn: [0, 0.71, 0.2, 1.01],
        easeOut: [0, 0.71, 0.2, 1.01],
      }}
    >
      <HeroSection />
    </motion.div>
  );
}

export default App;
