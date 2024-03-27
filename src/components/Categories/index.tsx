import React, {useContext} from "react";
import styles from "./Categories.module.scss";
import { useAppContext } from "./../../useAppContext.tsx";
import { Interface } from "readline";

interface Category{
    key:string;
    name:string;
}


const Categories:React.FC=()=>{

    const {chooseCategory}=useAppContext();
    
    const categories:Category[] =[
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
                <div key={el.key} onClick={()=>chooseCategory(el.key)}> {el.name}</div>
            ))}
        </div>
    );
};
export default Categories;