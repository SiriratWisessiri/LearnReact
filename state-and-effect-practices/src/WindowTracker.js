import { useEffect, useState } from "react"
    /**
     * Challenge:
     * 1. Create state called `windowWidth`, default to 
     *    `window.innerWidth`
     * 2. When the window width changes, update the state
     * 3. Display the window width in the h1 so it updates
     *    every time it changes
     */
function WindowTracker(){
    const [show, setShow] = useState(true)
    const [windowWidth, setWindowWidth] = useState(window.innerWidth)

    useEffect(function(){
        window.addEventListener("resize", function(){
            setWindowWidth(prevWindowWidth => window.innerWidth )
        },[window.innerWidth])
    })

    function toggle() {
        setShow(prevState => !prevState)
    }

    return (
        <div>
            <div className="container">
                <button onClick={toggle}>
                    Toggle WindowTracker
                </button>
            </div>
            {show && <h1>Window Width: {window.innerWidth} px</h1>}
        </div>
 
    )
}

export default WindowTracker