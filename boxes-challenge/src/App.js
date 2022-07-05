import './App.css';
import { useState } from 'react';
import BoxesData from './BoxesData';
import Box from './Box';


// function App(props) {
//   //  Challenge part 1:
//   //  1. Initialize state with the default value of the
//   //     array pulled in from BoxesData.js
//   const [box, setBox] = useState(BoxesData) // this is "Boxes" data objects from BoxesData.js
//   // Challenge part 1:
//   // 2. Map over that state array and display each one
//   //as an empty square (black border, transparent bg color)
//   //(Don't worry about using the "on" property yet)

//   //This is JS style instead of CSS. The benefit of this is so you can target the JS condition to change the style.
//   // We will set the dark mode in index.js and giving conditon if it's dark mode then will display different color
//   // We use Darkmode as a props so need to pass props in as a parameter!
//   const styles = {
//     backgroundColor: props.darkMode ? "#222222" : "#cccccc"
// }
//   const boxElements = box.map(box => (  // this "box" is from the box state. "box" = initial use state of "Boxes" array. And when using .map or working with array need to have uniqe key to avoid error
//     <div className='box' style={styles} key={box.id}> 
//     {/* We can use JS style to style our elements "style={styles}" instead of CSS. The benefit of this is so you can target the JS condition to change the style*/}
//     {/* This will render all the boxes as it's .map through each box in Boxes array*/}
//     </div>
//   )) 
//   return (
//     <div className="">
//         {/* Render "boxElement" becuase it is where the .map go through the Boxes data object and put in {} becuase it is JS element not React component*/}
//         {boxElements}     
//     </div>
//   );
// }

// export default App;

    /**
     * Challenge part 2:
     * This excercise will display the box color base on "on" object from BoxesData
     * 1. Create a separate component called "Box" and
     *    replace the `div` above with our <Box /> components
     * 2. Pass the Box component a prop called `on` with the
     *    value of the same name from the `boxes` objects
     * 3. In the Box component, apply dynamic styles to determine
     *    the backgroundColor of the box. If it's `on`, set the
     *    backgroundColor to "#222222". If off, set it to "none"
     */
    
     function App() {
      const [box, setBox] = useState(BoxesData)
      
      const boxElements = box.map(box => (
        <Box on={box.on} key={box.id}/> 
      )) 
      return (
        <div className="">
            {boxElements}     
        </div>
      );
    }
    
    export default App;