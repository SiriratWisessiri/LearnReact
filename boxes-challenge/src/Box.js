function Box (props) {
    const boxStyle = {
        backgroundColor: props.on ? "#222222" : "none"
    }
    return (
        <div className='box' style={boxStyle}></div>
    )   
}

export default Box