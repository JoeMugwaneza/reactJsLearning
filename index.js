
const Header = require('Header.js')

// import Footer from "./Footer"
// import MainContent from "./MainContent";



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