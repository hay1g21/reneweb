function ImageCard(props){
    return (
        <div className = "imgCard">
            <img src={props.source} alt="The Therapist"></img>
            <div>
                <h4><a href="">{props.workName}</a></h4>
            </div>
        </div>
    )
}

export default ImageCard