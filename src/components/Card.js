import "../style.css"

function Card(props) {
    return (
        <div className="card">
            <img className="card--image" src={`img/${props.img}`} alt="img" />
            <div className="card--stats">
                <img className="card--star" src="img/star.png" alt="img" />
                <span>{props.rating}</span>
                <span className="grey">({props.reviewCount}) • </span>
                <span className="grey">{props.location}</span>
            </div>
            <p className="card--title">{props.title}</p>
            <p className="card--price"><span className="bold">From ${props.price}</span> / person</p>
        </div>
    )
}

export default Card;