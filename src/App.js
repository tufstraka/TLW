import Timelock from './pages/timelock';
import Navbar from './components/navbar';
import Footer from './components/footer';


function App() {
  return (
    <div className="App">
      <div>
        <Navbar />
        <Timelock />
        <Footer />
      </div>
    </div>
  );
}

export default App;
