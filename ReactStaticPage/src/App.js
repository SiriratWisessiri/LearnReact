// import logo from './logo.svg';
import './App.css';
import logo from './reactLogo.png'

function App() {
  return (
    <div className="">
      <Header />
      <Maincontent />
      <Footer />
    </div>
  );
}

function Header() {
  return (
    <header>
    <nav>
      <img src={logo}></img>
    </nav>
  </header>
  );
}

const Maincontent =()=> {
  return(
    <div>
      <h1>Fun Fact about React</h1> 
      <ol>
        <li>Was first release in2013</li>
        <li>Was originally create by Jordan Walke</li>
        <li>Has well over 100K stars on GitHub </li>
        <li>Is maintained by Facebook</li>
      </ol>
    </div>
  );
}

const Footer = () => {
  return (
    <footer>
      <p>© 2022 Siri. All right reserved.</p>
    </footer>
  );
}

export default App;
