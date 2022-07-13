import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [starWarData, setStarWarData] = useState({})
  const [count, setCount] =useState(1)

  React.useEffect(function(){  // The function we passed to useEffect will run after every render of the component
    console.log("Effect ran")
    // Below is too fetch the data fromthe API. I can change to fetch the next data that the index mtach the count number
    fetch(`https://swapi.dev/api/people/${count}`)
    .then(res => res.json())
    .then(data => setStarWarData(data))
  },[count])//Dependency Array. Is determine when the effect will run(instead of running after every render) 
  //useEffect required second parameter to stop the infinite loop of rendering the setState
  //you can leave the array empty if there are no dependency fir the effect to run(no change of the state needed for run the effect). Then it will just run on the first render.
  
  // useEffect(function() {
  //   console.log("Effect ran")
  // },[count])

  return (
    <div className="">
      <h3>Charactor No. {count}</h3>
      <button onClick={() => setCount(prevCount => prevCount + 1)}>Next Charactor</button>
      <pre>{JSON.stringify(starWarData, null, 2)}</pre>
    </div>
  );
}

export default App;
