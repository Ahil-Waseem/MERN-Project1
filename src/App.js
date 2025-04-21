import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useLocation } from 'react-router-dom'; 
import Home from './pages/Home.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './components/Footer';
import Navbar1 from './components/Navbar1.jsx';
import HeroSection from './components/HeroSection.jsx';
import Signup from './pages/Signup.jsx';
import Login from './pages/Login.jsx';
import { Container } from 'react-bootstrap';

function AppContent() {
  const location = useLocation();
  const showHero = !['/login', '/signup'].includes(location.pathname);
  
  return (
    <div className="d-flex flex-column min-vh-100">
      <Navbar1/>
      
      <Container fluid className="flex-grow-1 px-0 main-content">
        {showHero && <HeroSection />}
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </Container>
      
      <Footer className="mt-auto" />
    </div>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;