import Timelock from './pages/timelock';
import Navbar from './components/navbar';
import Footer from './components/footer';
import AboutUs from './components/Aboutus';
import { Route, Routes } from 'react-router-dom';


function App() {
  return (
    
    <div className="App">
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Timelock />} />
          <Route path="/about" element={<AboutUs />} />
        </Routes>  
        <Footer />
      </div>
    </div>
  );
}

export default App;
