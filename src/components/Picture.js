export const Picture = ({pic}) => {
    return (
        <div className="container">
            <div className="img-container">
                <div className="img-front">
                    <img className="image" src={pic} alt="gallery-scene"/>
                </div>
                <div className="img-back">
                    <p>{pic.text}</p>
                </div>
            </div>
        </div>
    )
}