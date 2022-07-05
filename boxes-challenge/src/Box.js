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
// function Box (props) {
//     const [onOff, setOnOff] = useState(props.on) //This initial state receive props.on from BoxesData(BpxesData.js) 
    
//     const boxStyle = {
//         backgroundColor: onOff ? "#222222" : "transparent"
//     }

//     function toggle() {
//         setOnOff(prevState => !prevState) //toggle to set opposit from previous state. This  name in parameter can be any name, using prevState or having word prev is for easy understanding
//     }

//     return (
//         <div className='box' style={boxStyle} onClick={toggle}></div>
//     )   
// }

// export default Box
//////////////////////////////////////////////
//Below is Box challenge part5 that will target to toggle each id of the box
// In previous excercise we put toggle function here in Box component that target every box, 
//now we will move the toggle function to the parent(App.js) that will target id of the box the got clicked then change the state of that box
function Box(props) {
    const styles = {
        backgroundColor: props.on ? "#222222" : "transparent"
    }
    
    return (
        <div 
            style={styles} 
            className="box"
            onClick={props.toggle} // Changed from the code below as toggle already has id passed on in App.js 
            // onClick={()=>props.toggle(props.id)} 
            
            // every time box get clicked it will run this function, 
            //as you see there is a callback function inside. This function will run props.toggle, 
            //we did that so we can have the parameter of props.id passing each "id" in.
        >
        </div>
    )
}
export default Box