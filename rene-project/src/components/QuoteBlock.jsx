

function QuoteBlock(props){
    return(
    <>
        <div className="quoteBlock"> 
            <blockquote ><p><i><span>{props.quote}</span> - {props.name}</i></p></blockquote>
        </div>
    </>
    )

}

export default QuoteBlock;