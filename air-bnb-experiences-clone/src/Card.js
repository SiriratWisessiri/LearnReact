
import star from './image/star.png';
import data from './data';

function Card() {
    const cardElement = data.map(item => {
        return (
            <div className="card">
                <img src= {item.image}/>
                <div className='card-stats'>
                    <img src={star} />
                    <span>{item.rating}</span>
                    <span>({item.review}) · </span>
                    <span>{item.location}</span>
                </div>
                <p>{item.title}</p>
                <p><b>From ${item.price}</b> / person</p>
            </div>
        )    
    })

    return(
        <div className="card-container">         
         {cardElement}
        </div>
    )
}

export default Card