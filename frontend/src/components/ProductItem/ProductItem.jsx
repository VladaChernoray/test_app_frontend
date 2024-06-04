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
            <Button className={"add-button"} onClick={onAddHandler}>Add for <b>${product.price}</b></Button>
        </div>
    )
}

export default ProductItem;