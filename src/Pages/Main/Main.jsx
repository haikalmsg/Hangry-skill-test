import React from "react";
import { useState, useEffect } from "react";
import './Main.css';
import handphone from '../../Assets/Main/Banner/handphone.png';
import playstore from '../../Assets/Main/Banner/playstore.svg';
import appstore from '../../Assets/Main/Banner/appstore.svg';
import ProductCard from "../../Components/ProductCards/ProductCard";
import DB from "../../Product"
import p1 from "../../Assets/Main/Partners/Gofood.svg"
import p2 from "../../Assets/Main/Partners/GrabFood.png"
import p3 from "../../Assets/Main/Partners/Zomato.png"
import p4 from "../../Assets/Main/Partners/Traveloka.png"
import promo from "../../Assets/Main/Promo/promo.jpeg"
import mobile from "../../Assets/Main/Banner/IphoneMobile.png"
import { DropdownContext } from "../../Context/DropdownContext";
import Dropdown from "../../Components/Dropdown/Dropdown";


function Main() {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    const [isMobile, setIsMobile] = useState(windowWidth <= 768);

    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
            setIsMobile(window.innerWidth <= 768);
        };

        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);
    
    const {isDropdownOpen} = React.useContext(DropdownContext)
    
    return (
        <div className="mainWrapper">
            {isDropdownOpen && <Dropdown />}
            <div className = {isDropdownOpen ?  "bannerMain dropOpen" : "bannerMain"}>
                <div className="mainRight">
                    <h5 className="mainSubTitle">Kamu laper atau haus?</h5>
                    <h1 className="Title" id="Main">
                        Tenang... ada {isMobile && <br></br>}Hangry! {!isMobile && <br></br>} yang {isMobile && <br></br>} siap mengatasi
                    </h1>
                    <div className="downloadWrapper">
                        {!isMobile && <img className="download" id="playstore" src={playstore}></img>}
                        <img className="download" id="appstore" src={appstore}></img>
                    </div>
                </div>
                {!isMobile && <img className="handphone" src={handphone}></img>}
                {isMobile && <img className="handphone" src={mobile}></img>}
            </div>
            <div className="productShowcaseWrapper">
                <h1 className="Title" id="product">
                    Hangry! adalah restoran dengan beragam brand
                </h1>
                <h3 className="productShowcaseSubTitl subTitle">
                    Kami menyajikan beragam brand untuk menemani setiap waktu santapmu
                </h3>
                <div className="productCardsWrapper">
                    {DB.map((product) => (
                        <ProductCard data={product} id = {product.id}/>
                    ))}
                    
                </div>
            </div>
            <div className="partnerWrapper">
                <h3 className="subTitle" id = "partner">Hangry! dapat kamu temukan di</h3>
                <div className="partnerLogoWrapper">
                    <img className="partnerLogo" src= {p1}></img>
                    <img className="partnerLogo" src= {p2}></img>
                    <img className="partnerLogo" src= {p3}></img>
                    <img className="partnerLogo" src= {p4}></img>
                </div>
            </div>
            <div className="promoWrapper">
                <div className="promoText">
                    <h1 className="Title">Makin Rame, Makin hemat!</h1>
                    <h3 className="subTitle" id = "promo">Nikmati keuntungan dengan minimum <br></br> pembelian 20 porsi menu apa aja. Cocok untuk <br></br>hidangan segala acara!</h3>
                    <ul className="promoList">
                        <li className="promoListItem">Beragam pilihan menu</li>
                        <li className="promoListItem">Semua menu diskon 20%</li>
                        <li className="promoListItem" id = "bottomList">Gratis biaya Kirim</li>
                        <h5 className="syarat">*Syarat dan ketentuan berlaku</h5>
                    </ul>
                    <div className="promoButton">Pesan Sekarang</div>
                </div>
                <img className="promoImg" src={promo}></img>
            </div>
        </div>
    );
}
export default Main;