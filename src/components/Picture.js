export const Picture = ({pic, title}) => {
    return (
        <div className="container">
            <div className="img-container">
                <div className="img-front">
                    <img className="image" src={pic} alt="gallery-scene"/>
                </div>
                <div className="img-back">
                    <p>{title}</p>
                    <button>Click To See Larger Image</button>
                </div>
            </div>
        </div>
    )
}