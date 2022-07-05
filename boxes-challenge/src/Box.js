import {useState} from 'react'    
    /**
     * Challenge: Create state controlling whether
     * this box is "on" or "off". Use the incoming
     * `props.on` to determine the initial state.
     * 
     * Create an event listener so when the box is clicked,
     * it toggles from "on" to "off".
     * 
     * Goal: clicking each box should toggle it on and off.
     */


function Box (props) {
    const [onOff, setOnOff] = useState(props.on) //This initial state receive props.on from BoxesData(BpxesData.js) 
    
    const boxStyle = {
        backgroundColor: onOff ? "#222222" : "transparent"
    }

    function toggle() {
        setOnOff(prevState => !prevState) //toggle to set opposit from previous state. This  name in parameter can be any name, using prevState or having word prev is for easy understanding
    }

    return (
        <div className='box' style={boxStyle} onClick={toggle}></div>
    )   
}

export default Box
