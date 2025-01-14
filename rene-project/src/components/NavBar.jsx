import { useState } from "react";
import { useEffect } from "react";
import { useRef } from "react";
function NavBar (){
    const [expand, setExpand] = useState(true);
    const [goTop, setGoTop] = useState(false);
    
    const handleScrollUp = () => {
        window.scrollTo({left:0,top:0, behavior:"smooth"})
    }
    const setScroll= () =>{
        window.scrollY === 0 ? setExpand(true) : setExpand(false);

        if(window.scrollY > 50){
            setGoTop(true)
        }else{
            setGoTop(false)
        }
    }
    useEffect(() =>{
        window.addEventListener("scroll", setScroll)
        return () =>{
            window.removeEventListener("scroll",setScroll);
        };
    },[])
    return(
    <>
        <nav className='navbar'>
            <ul>
                <li><a href ="#home" className={expand ? "navAnim" : "navAnimRev"}>Home</a></li>
                <li><a href ="#profile" className={expand ? "navAnim" : "navAnimRev"}>René Magritte</a></li>
                <li><a href ="#favourites" className={expand ? "navAnim" : "navAnimRev"}>Author's Favourites</a></li>
                <li><a href ="#quiz" className={expand ? "navAnim" : "navAnimRev"}>Quiz</a></li>
                <li><a href ="#draw" className={expand ? "navAnim" : "navAnimRev"}>Draw Surreal</a></li>
            </ul>
            
        </nav>  
        {goTop ? <button className='toTop arrow' onClick={handleScrollUp}>^</button> : null}
        
    </>
    )
}

export default NavBar;