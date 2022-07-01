import React from 'react';
import './App.css';
import Heading from './heading';
import Card from './Card';
import 'bootstrap/dist/css/bootstrap.min.css';
import CardBody from './Card';
import AddItem from './AddItem';

function App() {
  return (
    <div className="">
        <Heading />
        <CardBody />
        <AddItem />
    </div>
  );
//   const [things, setThings] = React.useState(["Thing 1", "Thing 2"])
    
//     function addItem() {
//         const newThingText = `Thing ${things.length + 1}`
//         setThings(prevState => [...prevState, newThingText])
//     }
    
//     const thingsElements = things.map(thing => <p key={thing}>{thing}</p>)
    
//     return (
//         <div>
//             <button onClick={addItem}>Add Item</button>
//             {thingsElements}
//         </div>
//     )
}

export default App;
