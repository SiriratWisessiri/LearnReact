import './App.css';
import {useState} from 'react';
import Body from './body';
import Header from './header';

// We are learning how to pass the state from the parent to children as a props
function App() {
//  Creat the state in parent component
  const [user, setUser] = useState("Siri")
  return (
// Iniialise the state to the child component that receiving this state  
    <div>
      <Header user = {user} />
      <Body user = {user}/>
    </div>
  );
}

export default App;
