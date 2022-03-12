import photo_grid from "../img/photo-grid.png";
import "../style.css"

function Hero() {
    return (
        <section classname="hero">
            <img classname="hero--photo" src={photo_grid} />
            <h1 classname="hero--header">Online Experiences</h1>
            <p classname="hero--text">Join unique interactive activities from home</p>
        </section>
    )
}

export default Hero;