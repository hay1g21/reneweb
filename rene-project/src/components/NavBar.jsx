import { useState } from "react";


function NavBar (){
    const [expand, setExpand] = useState(false);
    
    return(
    <>
        <nav className='navbar'>
            <ul>
                <li><a href ="#home" className={expand ? "navAnim" : "navAnimRev"}>Home</a></li>
                <li><a href ="#profile" className={expand ? "navAnim" : "navAnimRev"}>René Magritte</a></li>
                <li><a href ="#favourites" className={expand ? "navAnim" : "navAnimRev"}>Author's Favourites</a></li>
                <li><a href ="#quiz" className={expand ? "navAnim" : "navAnimRev"}>Quiz</a></li>
                <li><a href ="#draw" className={expand ? "navAnim" : "navAnimRev"}>Draw Surreal</a></li>
                <button onClick={() => expand ? setExpand(false) : setExpand(true)}>CLICK HERE</button>
            </ul>
           
        </nav>    
    </>
    )
}

export default NavBar;