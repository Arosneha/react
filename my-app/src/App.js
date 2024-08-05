import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Navbar';
import Contact from './Contact';

import Home from './Home';
import Destination from './Destination';

import About from './About';

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <switch>
        <Routes>
        <Route>
           <Route path="/" element={<Home/>}/>
            
            <Route path='/destination' element={ <Destination/>}/>
          
          <Route path="/About" element={<About/>}/>
          
          <Route path="/Contact" element={<Contact/>}/>
          
           </Route>
          
      
          </Routes>
          </switch>
      </div>
    </Router>
  );
}

export default App;
