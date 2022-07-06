   /**
     * Challenge:
     * - Create state `isShown` (boolean, default to `false`)
     * - Add a button that toggles the value back and forth
     */

import { useState } from "react"

function Joke(props) {
    const [isShown, setIsShown] = useState(false)

    function toggle() {
        return(
            setIsShown(preveState => ! preveState) // toggle between previous state false => true, true => false 
            
        )
    }

    return(
        <div>
            {props.setup && <h3>{props.setup}</h3>}
            {/* Using && logical opereter to check if "isShown" is true then the punchline will show.*/}
            {isShown && <p>{props.punchline}</p>} 
            {/* The button will toggle state between true and false  */}
            {/* Tenary Operator inside the button is handle the change of the text base on state of the punchline */}
            <button onClick={toggle}>{isShown ? "Hide" : "Show"} Punch line </button>
            <hr />
        </div>
    )
}

export default Joke