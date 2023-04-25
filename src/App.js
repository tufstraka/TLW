import Navbar from './components/navbar';
import Footer from './components/footer';
import ChatWidget from './components/chatWidget';
import Home from './pages/home';
import AboutUs from './components/Aboutus';
import { Route, Routes } from 'react-router-dom';


function App() {
  return (
    
    <div className="App">
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutUs />} />
        </Routes>
        <ChatWidget />  
        <Footer />
      </div>
    </div>
  );
}

export default App;
