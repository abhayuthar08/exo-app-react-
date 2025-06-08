import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import Landing from './Components/Landing';
import Work from './Components/Work';
import Home from './Components/Home';
import About from './Components/About';
import Contact from './Components/Contact';
import Pricing from './Components/Pricing';

function App() {
  return (
    <Router>
      <div className='w-full'>
        <Navbar />

        {/* Page Routes */}
        <div className='pt-20'>
          <Routes>
            <Route path='/' element={
              <>
                <Landing />
                <Work />
              </>
            } />
            <Route path='/home' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/pricing' element={<Pricing />} />
          </Routes>
        </div>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
