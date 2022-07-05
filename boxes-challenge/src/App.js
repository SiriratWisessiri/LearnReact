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
//   const boxElements = box.map(box => (  // this parameter "box" name can name anything.Just need to make sure that you use the same nam when passing to the value below. When using .map or working with array need to have uniqe key to avoid error
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
    //  function App() {
    //   const [box, setBox] = useState(BoxesData)
      
    //   const boxElements = box.map(anyname => ( // this parameter name can name anything.Just need to make sure that you use the same nam when passing to the value below.
    //     <Box 
    //       on={anyname.on} key={anyname.id}/>  //Box has a props of "on" that will pass to Box(props) in Box.js
    //   )) 
    //   return (
    //     <div className="">
    //         {boxElements}     
    //     </div>
    //   );
    // }
    
    // export default App;
/////////////////////////////////////////////
//Below is challenge part 5 that will target each id of the box to toggle
// In previous excercise we put toggle function here in Box component that target every box, 
//now we will move the toggle function to the parent(App.js) that will target id of the box the got clicked then change the state of that box
function App() {
  const [box, setBox] = useState(BoxesData)

  function toggle(id) {
    setBox(prevState => {
      return prevState.map((myBox) => {
          return myBox.id === id ? {...myBox, on : !myBox.on} : myBox
      })
    })
  }
  // We look into previous(state) array and will map over that previous(state) array. 
  // .map return a new array without modifying the original array that will have the same length as the original array.
  // What ever we return from the callback function of .map is what we get place in the same index in the new array 
  // as what was in the original array. Everytime we loop over an item in this array is we're checking if it's "id" matches 
  // with the id that we are passing into our toggle function. If the id match, mean that it's the box that was clicked.
  //  If that's true then I want to replace to old object with the brand new object {...myBox, on: !myBox.on} 
  //  It is crutial that you are not upsating state directly. This object will pull all the value of myBox, 
  //  then it over ride the "on" value with its opposite. How ever if this is not the box that was clicked, 
  //  then just give(stay) the old myBox
  
  const boxElements = box.map(myBox => ( // this parameter name can name anything.Just need to make sure that you use the same nam when passing to the value below.
    <Box  //Box has a props of "on" that will pass to Box(props) in Box.js
      on={myBox.on} 
      key={myBox.id}
      //id={myBox.id} 
      //Instead of passing the id to the Box(like the above line), we can also pass the id stright to the toggle.
      // having a call back function in side the toggle here similar to what we did in the Box component in Box.js
      //It created something call "closure" where each instance of the box will have it own toggle will it will remember it own id
      // in Box component can remove teh function and only have toggle function
      toggle={() => toggle(myBox.id)}
      /> 
  )) 
  return (
    <div className="">
        {boxElements}     
    </div>
  );
}

export default App;