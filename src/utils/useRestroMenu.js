import { useEffect, useState } from "react"
import { MENU_API } from "../utils/constants";
const useRestroMenu=(resId)=>{
    const [menuCard,setMenuCard] = useState(null)
     useEffect(()=>{
        fetchMenu();
    },[])
    const fetchMenu = async ()=>{
        const data = await fetch(MENU_API + resId)
        const json = await data.json();
        // console.log(json.data.cards);
        // console.log(json.data.cards[0].card.card.info);
        // console.log(json.data.cards[2].groupedCard.cardGroupMap.REGULAR.cards[2].card.card.itemCards);
        setMenuCard(json.data);

    }
    return menuCard;
}
export default useRestroMenu;