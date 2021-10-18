import { LargeImagePortal } from "../portals/LargeImagePortal";
import React from 'react';

export const Picture = ({pic, title, text}) => {
    const [show, setShow] = React.useState(false);
    const [flipp, setFlipp] = React.useState(false);

    const shown = (e) => {
        e.stopPropagation();

        setShow(!show)
    }
    return (
        <div onClick={() => setFlipp(!flipp)} className={flipp ? "container2" : "container"}>
            <div className="img-container">
                <div className="img-front">
                    <img width="250" height="200" className="image" src={pic} alt="gallery-scene"/>
                </div>
                <div className="img-back">
                    <p>{title}</p>
                    <p className="text">{text}</p>
                    <button onClick={shown}>Click To See Larger Image</button>
                </div>
            </div>
            <LargeImagePortal>
                <div className={show ? "portal" : "hidden"}>
                    <h1>Big Picture Goes Here</h1>
                </div>
            </LargeImagePortal>
        </div>
    )
}