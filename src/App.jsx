import './App.css';
  import {Routes , Route} from 'react-router-dom'
import Normalize from 'react-normalize';
import Home from './Pages/Home';
import Services from './Pages/Services';
import Contact from './Pages/Contact';
import PricingPlan from './Pages/PricingPlan';
import Navbar from './Components/Navbar/Navbar';
import Footer from './Components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Normalize />
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/services' element={<Services />} />
        <Route path='/pricing' element={<PricingPlan />} />
        <Route path='/Contact' element={<Contact />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
