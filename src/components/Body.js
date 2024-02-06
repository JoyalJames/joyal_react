import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";

const Body = () => {
    const [state,setState]=useState([]);

    useEffect(()=>{
        fetchData();
    },[]);

    const fetchData = async ()=>{
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=9.591566799999999&lng=76.5221531&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        const json = await data.json();
        console.log(json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants);
        // optional chaining
        setState(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
    }
    if(state.length === 0){
        return <Shimmer/>
    }
    return(
        <div className="body">
            <div className="filter">
                <button id="filter-btn" onClick={()=>{
                    const filteredData = state.filter((e)=>e.data.avgRating>4)
                    setState(filteredData);
                }}>Top Rated</button>
            </div>
            <div className="restro-container">
        {/* Always use key={} */}
        {/* not using keys(not acceptable) <<< index as key(if no unique id use) <<<  unique id(best practice) */}
                {
                    state.map((resto)=><RestaurantCard key={resto?.info.parentId} restList={resto}/>)
                }           
            </div>
        </div>
    )
}
export default Body;