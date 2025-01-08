import { useState } from "react";

function ImageCard(props){
    const [showInfo, setShow] = useState(false);

    return (
        <div className = "imgCard" onMouseEnter={() => setShow(true)} onMouseLeave={() => setShow(false)}>
            {showInfo ?
             <div className = "imgOverlay">
                <h2>{props.workName + ", " + props.date}</h2>
                <div className="imgInfo">sdwa</div>
             </div>
             : null}
            <img src={props.source} alt={props.alt}></img>
            <div>
                <h4><a href="">{props.workName}</a></h4>
            </div>
        </div>
    )
}

export default ImageCard