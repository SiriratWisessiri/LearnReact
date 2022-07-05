// You can pass the state(user) from the parent(App.js) to many children
// in this excercise state are passing to header.js and body.js
// Children receiving the state as a props

function Header(props) {
    return (
        <h1> User: {props.user}</h1>
    )
}

export default Header
