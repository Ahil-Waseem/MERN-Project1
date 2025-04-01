
import './App.css';
import MyNavbar from './components/MyNavbar.jsx';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './Screens/Home.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      
        <MyNavbar/>
      <Routes>
        <Route path='/home' element={<Home/>}/>
        {/* <Route path='/' element={<About/>}/> */}
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
