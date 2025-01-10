
function CardSlider(props){
    return (
        <>
            <section className= "cardSliderOutside">
                <div className="cardSliderContainer">
                    <button className="slider-butt-left">Left</button>
                    <div className="cardSlider">
                         {props.children}
                    </div>
                    <button className="slider-butt-right">Right</button>
                    
                </div>
                
            </section>
        </>
    )
}


export default CardSlider;