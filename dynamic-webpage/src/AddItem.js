// Adding ne thing on Click
// Learn state and hook

import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';


function AddItem() {
    const [things, setThings] = useState(["Thing1", "Thing2"])
    const newThing = `Thing ${things.length + 1}`
    function handleClick (){
        // Adding thing icrement by 1
        const newThing = `Thing ${things.length + 1}`
        setThings(prevState => [...prevState, newThing])
        // Push new thing to the array
        // thingsArray.push(newThing)
        // console.log(thingsArray)
    }
    const thingsElement = things.map(thing => <p>{thing}</p>)
    

  return (
    <div className="d-grid">
      <Button variant="primary" size="lg" onClick={handleClick}>
        Add Item
      </Button>
      {thingsElement}
     
    </div>
  );
}
  
// function AddItem() {
//     const [things, setThings] = React.useState(["Thing 1", "Thing 2"])  
//     const thingsElements = things.map(thing => <p key={thing}>{thing}</p>)

//     function handleClick (){
//         const newThing = `Thing ${things.length + 1}`
//         setThings(prevState => [...prevState, newThing])
//     }   
//     return (
//         <div className="d-grid">
//             <Button variant="primary" size="lg" onClick={handleClick}>
//             Add Item
//             </Button>
//             {thingsElements}
            
//         </div>
//     )
// }



export default AddItem;