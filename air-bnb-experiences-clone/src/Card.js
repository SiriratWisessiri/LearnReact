import swimmer from './image/swimmer.png'
import star from './image/star.png';

function Card() {
    return(
        <div className="card">
            <img src={swimmer} />
            <div className='card-stats'>
                <img src={star} />
                <span>5.0</span>
                <span>(6) · </span>
                <span>USA</span>
            </div>
            <p>Life lessons with Katie Zaferes</p>
            <p><b>From $136</b> / person</p>

        </div>
    )
}

export default Card