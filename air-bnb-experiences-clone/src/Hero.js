import imageGrid from './image/image-grid.png';

function Hero () {
    return(
        <section className="hero">
            <img src= {imageGrid} className='hero-image'></img>
            <h1>Online Experiences</h1>
            <p>Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.</p>
        </section>
    )
}

export default Hero