import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { MENU_API } from "../utils/constants";

const RestroMenu = ()=>{
    const {resId} = useParams();
    const [menuCard,setMenuCard] = useState(null);
    useEffect(()=>{
        fetchMenu();
    },[])
    const fetchMenu = async ()=>{
        const data = await fetch(MENU_API + resId)
        const json = await data.json();
        console.log(json.data.cards[0].card.card.info);
        console.log(json.data.cards[2].groupedCard.cardGroupMap.REGULAR.cards[2].card.card.itemCards);
        setMenuCard(json.data);

    }
    if (menuCard === null) return <Shimmer/>
    // .cards[2].groupedCard.cardGroupMap.REGULAR.cards[2].card.card.itemCards
    const {name,avgRating,areaName,ratingSlab} = menuCard?.cards[0].card.card.info;
    const {itemCards} =  menuCard?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;
    console.log(itemCards)
    return(
        <div className="menu_card">
             <h1>{name}</h1>
            <h3>{avgRating}</h3>
            <h3>{areaName}</h3>
            <h3>{ratingSlab}</h3>
            <ul>
            {
                itemCards.map(item => ( 
                    <li key={item.card.info.id}>
                        {item.card.info.name}
                    </li>
                    ))
       }
            </ul>
       
           
        </div>
    )
}
export default RestroMenu;