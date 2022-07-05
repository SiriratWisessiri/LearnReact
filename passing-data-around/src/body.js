// paasing the user state from the parrent "App.js" as a props
function Body(props) {
    return (
        <div>
            <h2>Welcome back, {props.user} !</h2>
        </div>
    )
}

export default Body