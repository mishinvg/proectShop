import React from "react";
import styles from "./Categories.module.scss";

export default function Categories(props){
    
    const categories =[
        {
            key:"all",
            name:"Все"
        },
        {
            key:"овощи",
            name:"Овощи" 
        },
        {
            key:"фрукты",
            name:"Фрукты" 
        },
        {
            key:"ягоды",
            name:"Ягоды" 
        }
    ];
    
    return(
        <div className={styles.categories}>
            {categories.map(el=>(
                <div key={el.key} onClick={()=>props.chooseCategory(el.key)} > {el.name}</div>
            ))}
        </div>
    );
}