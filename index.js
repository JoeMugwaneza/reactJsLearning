// import React from 'react'
// import ReactDOM from 'react-dom'

import Header from './Header'
import MainContent from './MainContent'
import Footer from './Footer'

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