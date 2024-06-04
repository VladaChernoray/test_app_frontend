import React from "react";
import "../ProductItem/ProductItem.css"
import Button from "../Button/Button";

const ProductItem = ({product, className, onAdd}) => {
    const onAddHandler = () => {
        onAdd(product);
    }
    return(
        <div className={"product"}>
            <img className={"img"} src ={product.img}/>
            <div className={"title"}>{product.title}</div>
            <div className={"description"}>{product.description}</div>
            <div className={"price"}>
                <span>Price: {product.price}</span>
            </div>
            <Button className="add-button" onClick={onAddHandler}>ADD TO CARD</Button>
        </div>
    )
}

export default ProductItem;