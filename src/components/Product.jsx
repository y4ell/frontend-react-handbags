import React from 'react';
function Product(props) {
    return(
        <article>
        <span>{props.bestseller}</span>
    <img src={props.image} alt={props.name}/>
    <p>{props.name}</p>
    <h4>{props.price}</h4>
        </article>
    )
}

export default Product