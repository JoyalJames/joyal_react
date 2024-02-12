import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestroMenu from "../utils/useRestroMenu";
const RestroMenu = ()=>{
    const {resId} = useParams();
    // Fetching Data From Util folder useRestroMenu
    const menuCard = useRestroMenu(resId);
    if (menuCard === null) return <Shimmer/>
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