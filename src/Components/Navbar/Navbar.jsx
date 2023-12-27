import React from "react";
import './Navbar.css';
import logo from '../../Assets/Navbar/Logo.svg'


function Navbar(){
    return(
        <nav>
            <div className="navbar">
                <img className="navlogo" src={logo}></img>
                <div className="navlink">
                    <h3 className="link">Tentang Kami</h3>
                    <h3 className="link">Semua Outlet</h3>
                    <h3 className="link">Promo</h3>
                    <h3 className="link">Karier</h3>
                    <h3 className="link" id = "download">Download App</h3>
                </div>
            </div>
        </nav>
    )
}
export default Navbar