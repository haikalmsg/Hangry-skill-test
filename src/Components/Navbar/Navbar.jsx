import React from "react";
import { useState, useEffect } from "react";
import './Navbar.css';
import logo from '../../Assets/Navbar/Logo.svg'
import { DropdownContext } from "../../Context/DropdownContext";


function Navbar(){
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    const [isMobile, setIsMobile] = useState(windowWidth <= 768);
    const {isDropdownOpen ,setDropdownFalse, toggleDropdown} = React.useContext(DropdownContext)

    useEffect(() => {

        const handleResize = () => {
            setWindowWidth(window.innerWidth);
            setIsMobile(window.innerWidth <= 768)
            if (window.innerWidth > 768){
                setDropdownFalse()
            }
        };

        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);
    console.log(isDropdownOpen)


    return(
        <nav>
            <div className="navbar">
                <img className="navlogo" src={logo}></img>
                {isMobile && 
                    <i class="fa fa-bars" onClick={() => toggleDropdown()}></i>}
                
                {!isMobile && <div className="navLink">
                    <h3 className="link">Tentang Kami</h3>
                    <h3 className="link">Semua Outlet</h3>
                    <h3 className="link">Promo</h3>
                    <h3 className="link">Karier</h3>
                    <h3 className="link" id="download">Download App</h3>
                </div>}
            </div>
        </nav>
    )
}
export default Navbar