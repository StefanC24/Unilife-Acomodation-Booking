import './App.css';
import Footer from './pages/Components/Footer/Footer';
import Navbar from './pages/Components/Navbar/Navbar';
import Homepage from './pages/HomePage/Homepage';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Homepage/>
      <Footer/>
    </div>
  );
}

export default App;
