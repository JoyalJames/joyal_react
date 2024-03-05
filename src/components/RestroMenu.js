import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestroMenu from "../utils/useRestroMenu";
import RestaurantCategory from "./RestaurantCategory";
const RestroMenu = ()=>{
    const {resId} = useParams();
    // Fetching Data From Util folder useRestroMenu
    const menuCard = useRestroMenu(resId);
    if (menuCard === null) return <Shimmer/>
    const {name,avgRating,areaName,ratingSlab} = menuCard?.cards[0].card.card.info;
    // const {itemCards} =  menuCard?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;
    // console.log(menuCard?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards);
    const categories = menuCard?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(c => c.card?.card?.['@type'] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory");
    console.log(categories);
    return(
        <div className="text-center pt-80">
             <h1 className="font-bold">{name}</h1>
            <h3>{avgRating}</h3>
            <h3>{areaName}</h3>
            <h3>{ratingSlab}</h3>
            <h3>jiii
            {
                categories.map((category)=><RestaurantCategory data={category.card.card}/>)
            }
            </h3>
       
           
        </div>
    )
}
export default RestroMenu;