import {useState} from 'react'

function MultipleInputForm () {
    const [formData, setFormDataName] = useState( 
        //When there are more than 1 input field we can make the atate as object. 
        //And set the name property in the form to match the name object here
        { 
            firstName: "",
            lastName: "",
            email:"",
            comments:"",
            checkBox: false, //checkbox only take boolean value
            radioButton: "",
            selectBox: ""
        }
    )
    console.log(formData)
    function handleChange(event) {
        // We can't setFormdata to event.target.value 
        //as now the value is object, and it will erase the object and replace with single string
        //This time we need to know what the previous version of the state as we have a lot of properties that we need to maintain instead of over write
        //As when you input data to the new field, you want to keep the data from the previous field intact
        setFormDataName(prevState => { 
            const{name, value, type, checked} = event.target
            return {
                ...prevState, 
                //The goal is to return the new object and keep all the old object intact
                // this spread syntax make a copy of previous data (previous state)
                [name]: type === "checkbox" ? checked : value
                //The above line will over write or update the specific property(name) with new value
                // in ES6 you nned to put event.tartget. in square bracket to fix syntax issue
            }
        })
    }

    function handleSubmit(event) {
        event.preventDefault()  //To prevent the page from refresh
        //submitToApi(formData) //example function
        console.log(formData)
    }

    return (
        <form onSubmit={handleSubmit}>
            <h4>Multiple input form</h4>
            <input
                type="text"
                placeholder="First Name"
                onChange={handleChange}
                name="firstName" //This property name need to match the name given in the object
                //So the event.target know which item to target
                value={formData.firstName} //This is "Controlled componet. "name of state.name of specific input"
                // The value of the input will be contrlloed by React. 
                //Every change made run the "handleChange" function that will update the state
            />
            <input
                type="text"
                placeholder="Last Name"
                onChange={handleChange}
                name="lastName"
                value={formData.lastName}
             />
            <input
                type="email"
                placeholder="Email"
                onChange={handleChange}
                name="email"
                value={formData.email}
             />
             {/* Text area */}
             <textarea  //no need "type" as the text area is already type of text
                placeholder="Add your comments here"
                onChange={handleChange}
                name="comments"
                value={formData.comments}
             />
             {/* Check Box 
             hold boolean value, not string or number etc.*/}
             <div className='checkBox'>
                <input
                    type="checkbox"
                    id='checkBox'
                    onChange={handleChange}//You need to modify the "handleChange" function to take "checked" as well, not only "value"
                    name="checkBox"
                    checked={formData.checkBox} //checking the boolean value from the state
                />
                {/* label for checkbox useing "htmlfor" instead of "for" */}
                <label htmlFor="checkBox">Check Box?</label> 
            </div>
            <br />
        {/* radio button */}
            <fieldset className='radio'>
                <legend>Radio</legend>          
                <input 
                    type="radio"
                    id="radio1"
                    name="radioButton"
                    value="radio1"
                    checked={formData.radioButton === "radio1"}
                    onChange={handleChange}
                />
                <label htmlFor="radio1">Radio button 1</label>
                <br />
                
                <input 
                    type="radio"
                    id="radio2"
                    name="radioButton"
                    value="radio2"
                    checked={formData.radioButton === "radio2"}
                    onChange={handleChange}
                />
                <label htmlFor="radio2">Radio Button 2</label>
                <br />
                
                <input 
                    type="radio"
                    id="radio3"
                    name="radioButton"
                    value="radio3"
                    checked={formData.radioButton === "radio3"}
                    onChange={handleChange}
                />
                <label htmlFor="radio3">Radio Button 3</label>
                <br />
            </fieldset>
            <br />
            {/* Select Box */}
            <label htmlFor="favColor">What is your favorite color?</label>
            <br />
            <select 
                id="selectBox"
                value={formData.selectBox}
                onChange={handleChange}
                name="selectBox"
            >
                <option value="">Please Choose</option>
                <option value="red">Red</option>
                <option value="orange">Orange</option>
                <option value="yellow">Yellow</option>
                <option value="green">Green</option>
                <option value="blue">Blue</option>
                <option value="indigo">Indigo</option>
                <option value="violet">Violet</option>
            </select>
            <br />
            <br />
            {/* in HTML5 "button inside the form has a defualt type of "submit" */}
            <button>Submit</button>
        </form>
    )
}

export default MultipleInputForm