import {useRef} from 'react'

function CardSlider(props){

    const containerRef = useRef(); //use ref allows a value that doesnt cause app to rerender, and allows you to reference components of the Virt dom
    const handleScrollLeft = () =>{
        containerRef.current.scrollLeft -= containerRef.current.offsetWidth; //changes by full length allowing new cards to replace the length

        
    }

    const handleScrollRight = () =>{
       

        containerRef.current.scrollLeft += containerRef.current.offsetWidth;
    }
    return (
        <>
            <section className= "cardSliderOutside">
                <div className="cardSliderContainer">
                    <button className="slider-butt-left" onClick={() => handleScrollLeft()}>Left</button>
                    <div className="cardSlider" ref={containerRef}>
                         {props.children}
                    </div>
                    <button className="slider-butt-right" onClick={() => handleScrollRight()} >Right</button>
                    
                </div>
                
            </section>
        </>
    )
}


export default CardSlider;