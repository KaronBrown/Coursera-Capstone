
import React from 'react'
import './App.css';
import Nav from './Nav';
import Footer from './Footer';
import Header from './Header';
import Main from './Main';
import Reservations from './Reservations'
import AboutUs from './AboutUs';
import Reviews from './Reviews';


function App() {
  return (
    <div className="App">
   <Nav />
  <Header />
  <Main />
  <Reservations />
  <Reviews />
  <AboutUs />
  <Footer />
    </div>
  );
}

export default App;
