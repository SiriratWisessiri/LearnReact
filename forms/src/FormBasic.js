import {useState} from 'react';

// This filr is to lern the very basic of how hadle the state change in the form using event.target.value
// See MultipleFormInput file for more than one input fileds 
function FormBasic() {
    const [firstName, setFistName] = useState("")
    console.log(firstName)
    /**
     * Challenge: update the firstName state on every keystroke
    */
    function handleChange(event) {
        setFistName(event.target.value) 
        //In this case we don't have to worry about the previous state inorder to determine what is changed,
        // As there is only single input field so we will over write them 
        //As we target what event is happen in the input box
    } 
    
    return (
        <form>
            <h4>Single input form</h4>
            <input
                type="text"
                placeholder="First Name"
                onChange={handleChange}
            />
        </form>
    )
}

export default FormBasic
