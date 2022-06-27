
import star from './image/star.png';
import data from './data';

function Card() {
    const cardElement = data.map(item => {
        let badgeText
        if (item.openSpots === 0) {
            badgeText = "SOLD OUT"
        } else if (item.location === "Online") {
            badgeText = "Online"
        }
        return (
            <div className="card">
                {/* {item.openSpots === 0 && <div className='card-badge'>SOLD OUT</div>} */}
                {badgeText && <div className='card-badge'>{badgeText}</div>}
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