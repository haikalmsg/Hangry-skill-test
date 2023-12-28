import React from "react";
import './Dropdown.css'


function Dropdown(){
    return(
        <div className="dropdownWrapper">
            <hr></hr>
            <div className="dropdown">
                <h3 className="link">Tentang Kami</h3>
                <h3 className="link">Semua Outlet</h3>
                <h3 className="link">Promo</h3>
                <h3 className="link">Karier</h3>
                <h3 className="link" id="download">Download App</h3>
            </div>
        </div>
    )
}
export default Dropdown