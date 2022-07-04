import React, {useState} from "react";
import Button from 'react-bootstrap/Button';

function Counter () {
    const [count, setCount] = useState(0)

    function add() {
        // setCount(count + 1)
        // Althouygh the above code is work. But the best practice shouldbe that you create the call back function for the setAtate, see example below
        setCount (function() {
            return count + 1
        })
            /**
     * Note: if you ever need the old value of state
     * to help you determine the new value of state,
     * you should pass a callback function to your
     * state setter function instead of using
     * state directly. This callback function will
     * receive the old value of state as its parameter,
     * which you can then use to determine your new
     * value of state.
     *  function add() {
        setCount(prevCount => prevCount + 1)
     */
    }
    
    function subtract() {
        // setCount(count - 1)
        // The below example is arrow function format
        setCount(prevCount => prevCount - 1)
    }
    
    return(
        <div className='col d-flex justify-content-center counter'>
            <Button variant="warning" onClick={subtract}>-</Button>
            <h2 className="counter-number">{count}</h2>
            <Button variant="success" onClick={add}>+</Button>
        </div>
    )
}

export default Counter

