import './App.css';
import { Route, Routes } from 'react-router-dom';
import AllCities from './pages/Components/AllCities/AllCities';
import Footer from './pages/Components/Footer/Footer';
import Navbar from './pages/Components/Navbar/Navbar';
import Homepage from './pages/HomePage/Homepage';
import IndividualCity from './pages/Components/IndividualCity/IndividualCity';
import Header from './pages/Components/Header';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Header/>
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
