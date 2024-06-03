import React, {useEffect, useState} from "react";
import "../ProductList/ProductList.css"
import ProductItem from "../ProductItem/ProductItem";
import products from "../../data/data";
import { UseTg } from "../../hooks/UseTg";


const getTotalPrice = (products) => {
    return products.reduce((totalPrice, product) => {
        return totalPrice + product.price;
    }, 0);
}

const ProductList = () => {

    const {tg} = UseTg();

    const [addedItems, seAddedItems] = useState([]);
    const onAdd = (product) => {
        const alreadyAdded = addedItems.find(item => item.id === product.id);
        let newItems = [];

        if (alreadyAdded) {
            newItems = addedItems.filter(item => item.id != product.id)
        } else {
            newItems = [...addedItems, product]
        }
        seAddedItems(newItems);

        if (newItems.length === 0) {
            tg.MainButton.hide();
        } else {
            tg.MainButton.show();
            tg.MainButton.setParams({
                text: `Buy ${getTotalPrice(newItems)}`
            })
        }
    }
    return(
        <div className={"list"}>
            {products.map(item =>  (<ProductItem product={item} className={'item'} onAdd={onAdd}/> ))}
        </div>
    )
}

export default ProductList;