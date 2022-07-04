
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import {useState} from 'react';


function Ternary() {
    /**
     * Challenge: move our ternary directly inside of the JSX
     * so the "Yes" and "No" are determined inside the <h1>
     * 
     * Hint: you will no longer need the `answer` variable
     */

    //  const isGoingOut = false

        /**
     * Challenge: 
     * - Initialize state for `isGoingOut` as a boolean
     * - Make it so clicking the div.state--value flips that
     *   boolean value (true -> false, false -> true)
     * - Display "Yes" if `isGoingOut` is `true`, "No" otherwise
     */
    const[isGoingOut, setIsgoingOut] = useState(true)
    function handleIsgoingOut () {
       setIsgoingOut(prevState => !prevState)
    }
    return (
        <div>
            <Card className="text-center">
                <Card.Header>Learn Tenary Operation</Card.Header>
                <Card.Body>
                    <Card.Title>Do I feel like going out tonight?</Card.Title>
                    <Button bg="info" onClick={handleIsgoingOut}>{isGoingOut ? "Yes" : "No"} </Button>
                </Card.Body>
            </Card>
        </div>      
    )
}

export default Ternary