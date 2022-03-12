import profile_photo from "../img/katie-zaferes.png"
import star from "../img/star.png"
import "../style.css"

function Card() {
    return (
        <div className="card">
            <img className="card--image" src={profile_photo} alt="img" />
            <div className="card--stats">
                <img className="card--star" src={star} alt="img" />
                <span>5.0</span>
                <span className="grey">(6) • </span>
                <span className="grey">USA</span>
            </div>
            <p>Life lessons with Katie</p>
            <p><span className="bold">From $136</span> / person</p>
        </div>
    )
}

export default Card;