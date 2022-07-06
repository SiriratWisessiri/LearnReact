import {useState} from 'react'

function MultipleInputForm () {
    const [formData, setFormDataName] = useState( 
        //When there are more than 1 input field we can make the atate as object. 
        //And set the name property in the form to match the name object here
        { 
            firstName: "",
            lastName: "",
            email:""
        }
    )
    console.log(formData)
    function handleChange(event) {
        // We can't setFormdata to event.target.value 
        //as now the value is object, and it will erase the object and replace with single string
        //This time we need to know what the previous version of the state as we have a lot of properties that we need to maintain instead of over write
        //As when you input data to the new field, you want to keep the data from the previous field intact
        setFormDataName(prevState => { 
            return {
                ...prevState, 
                //The goal is to return the new object and keep all the old object intact
                // this spread syntax make a copy of previous data (previous state)
                [event.target.name] : event.target.value
                //The above line will over write or update the specific property(name) with new value
                // in ES6 you nned to put event.tartget. in square bracket to fix syntax issue
            }
        })
    }

    return (
        <form>
            <h4>Multiple input form</h4>
            <input
                type="text"
                placeholder="First Name"
                onChange={handleChange}
                name="firstName" //This property name need to match the name given in the object
                //So the event.target know which item to target
            />
            <input
                type="text"
                placeholder="Last Name"
                onChange={handleChange}
                name="lasttName"
             />
            <input
                type="email"
                placeholder="Email"
                onChange={handleChange}
                name="email"
             />
        </form>
    )
}

export default MultipleInputForm