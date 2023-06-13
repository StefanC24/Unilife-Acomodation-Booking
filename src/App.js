import './App.css';
import { Route, Routes } from 'react-router-dom';
import AllCities from './pages/Components/AllCities/AllCities';
import Footer from './pages/Components/Footer/Footer';
import Navbar from './pages/Components/Navbar/Navbar';
import Homepage from './pages/HomePage/Homepage';
import IndividualCity from './pages/Components/IndividualCity/IndividualCity';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path='/' element={<Homepage/>}/>
        <Route path='/cities' element={<AllCities/>}/>
        <Route path='/properties/city/:id' element={<IndividualCity/>}/>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
