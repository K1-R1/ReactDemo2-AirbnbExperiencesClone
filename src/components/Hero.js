import "../style.css"

function Hero() {
    return (
        <section className="hero">
            <img className="hero--photo" src="img/photo-grid.png" alt="img" />
            <h1 className="hero--header">Online Experiences</h1>
            <p className="hero--text">Join unique interactive activities from home</p>
        </section>
    )
}

export default Hero;