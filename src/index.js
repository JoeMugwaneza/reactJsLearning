// import React from 'react'
// import ReactDOM from 'react-dom'

import Header from './Header.js';
import MainContent from './MainContent.js';
import Footer from './Footer.js';
import './styles/index.css';

function App(){
 return (
  <div className="content-wrapper">
   <Header />
   <MainContent />
   <Footer />
  </div>
 );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);