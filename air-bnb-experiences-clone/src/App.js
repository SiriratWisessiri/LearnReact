import './App.css'
import Navbar from './Navbar';
import Hero from './Hero';
import Card from './Card';
import Contact from './Contact';

function App() {
  return (
    // <div className="App">
    //   <Navbar />
    //   <Hero />
    //   <Card />
    // 
    // </div>
    <div>
      <Contact
        name="Cat"
        phone="1111111"
        email="abcabc@abc.com"
      />

      <Contact
        name="Dog"
        phone="2222222"
        email="abcabc@abc.com"
      />

      <Contact
        name="Pig"
        phone="3333333"
        email="abcabc@abc.com"
      />
    </div>
  );
}

export default App;
