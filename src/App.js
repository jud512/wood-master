import React from 'react';
import { Header, Navbar, About, Blog } from './containers';
import './App.css';
import './index.css';
import Gallery from './containers/gallery/Gallery';
import Contact from './containers/contact/Contact';


function App() {
  return (
    <div className="App">
      <div className='gradient-bg'>
        <Navbar />
        <Header />
        <About />
        <Blog />
        <Gallery />
        <Contact />
      </div>
    </div>
  );
}

export default App;
