import React from "react";
import styles from "./Item.module.scss";
import { useAppContext } from "./../../useAppContext.tsx";
import { Interface } from "readline";

interface Props{
    item:any;
}

const Item:React.FC<Props>=({item})=>{
    const {onShowItem, addToOrder} = useAppContext(); 
    return(
        <div className={styles.item}>
            <img src={"./images/"+item.img} onClick={()=>onShowItem(item)} alt="Error"/>
            <h2>{item.title}</h2>
            <p>{item.desc}</p>
            <b>{item.price}$</b>
            <div className={styles.addToCart} onClick={()=>addToOrder(item)}>+</div>
        </div>
    );
};
export default Item;
