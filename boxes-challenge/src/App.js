import './App.css';
import { useState } from 'react';
import Boxes from './boxes';

function App() {
  //  Challenge part 1:
  //  1. Initialize state with the default value of the
  //     array pulled in from boxes.js
  const [box, setBox] = useState(Boxes) // this is "Boxes" data objects from boxes.js
  // Challenge part 1:
  // 2. Map over that state array and display each one
  //as an empty square (black border, transparent bg color)
  //(Don't worry about using the "on" property yet)
  const boxElements = box.map(box => (  // this "box" is from the box state. "box" = initial use state of "Boxes" array
    <div className='box' key={box.id}> 
    </div>
  )) 
  return (
    <div className="">
        {/* Render "boxElement" becuase it is where the .map go through the Boxes data object and put in {} becuase it is JS element not React component*/}
        {boxElements}     
    </div>
  );
}

export default App;
