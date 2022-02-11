const Card = (props) => {
    return (
        <div className="main-container">
            <div>
                <img src={`${props.element.image}`} alt={`${props.element.name}`}/>
            </div>
            <div className="element">
                <div className="location">{props.element.location}</div>
                <div className="title">{props.element.title}</div>
                <div className="date">{props.element.startDate} - {props.element.endDate}</div>
                <div className="description">{props.element.description}</div>
                <div className="link"><a href={`{props.element.link}`}>View on wikipedia</a></div>
            </div>
        </div>
    )
}

export default Card