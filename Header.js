
export default function Header(){
    return (
      <header>
       <nav className="nav">
          <img className="nav-logo" src="./react-logo.png"/>
          <ul className="nav-taps">
           <li>Pricing</li>
           <li>About</li>
           <li>Contact</li>
          </ul>
       </nav>
      </header>
    )
   }