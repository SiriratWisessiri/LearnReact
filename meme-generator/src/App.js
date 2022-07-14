
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './Nav';
// import Meme from './Meme';
import MemeAPI from './MemeAPI';


function App() {
  return (
    <div className="">
        <NavBar />
        {/* <Meme /> */}
        <MemeAPI />
        
    </div>
  );
}

export default App;
