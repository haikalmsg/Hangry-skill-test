import React from "react";
import './ProductCard.css';
import arrow from "../../Assets/Main/ProductShowcase/Misc/arrow-right.svg";



function ProductCard(props){
    const {id, pic, logo, name, genre, local} = props.data
    return(
        <div className="productCardWrapper">
            <div className="productPic" style={{backgroundImage: `url(${pic})`}}>
                <div className="placeHolder"></div>
                <div className="productlogo" style={{backgroundImage: `url(${logo})`}}></div>
            </div>
            <div className="productTitleWrapper">
                <h1 className="Title">{name}</h1>
                <img className="arrow" src={arrow}></img>
            </div>
            <h3 className="subTitle">{genre} · {local} </h3>
        </div>
    )
}
export default ProductCard;