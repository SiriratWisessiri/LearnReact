
import location from './image/location.png'
function Card(props) {
    return(
        <div className='card'>
            <img src={props.item.image} />
            <div className='card-content'>
                <div className='card-location'>
                    <img src={location} />
                    <span>{props.item.country}</span>
                    <span><a href='#'>View on Google map</a></span>
                </div>
                <h2>{props.item.location}</h2>
                <p>{props.item.date}</p>
                <p>{props.item.description}</p>
            </div>
        </div>
    );
}

export default Card