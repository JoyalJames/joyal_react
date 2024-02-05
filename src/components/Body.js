import RestaurantCard from "./RestaurantCard";
import restoList from "../utils/mockData";
import { useState } from "react";

const Body = () => {
    const [state,setState]=useState(restoList);
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
                    state.map((resto,index)=><RestaurantCard key={index} restList={resto}/>)
                }           
            </div>
        </div>
    )
}
export default Body;