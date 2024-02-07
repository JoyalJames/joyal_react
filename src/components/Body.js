import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";

const Body = () => {
    const [state,setState]=useState([]);
    const[search,setSearch] = useState("");
    const [filteredRestaurant,setFilteredRestaurant] = useState([]);

    useEffect(()=>{
        fetchData();
    },[]);

    const fetchData = async ()=>{
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=9.591566799999999&lng=76.5221531&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        const json = await data.json();
        console.log(json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants);
        // optional chaining
        setState(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setFilteredRestaurant(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)

    }
  
    return state.length === 0 ?  <Shimmer/> : (
        <div className="body">
            <div className="filter">
                <div className="search">
                    <input type="text" className="search-box" value={search} onChange={(e)=>{setSearch(e.target.value)}}/>
                    <button onClick={()=>{
                        // filter with actual
                        const fiteredSearch = state.filter((res)=> res?.info?.name.toLowerCase().includes(search.toLowerCase()));
                        setFilteredRestaurant(fiteredSearch);
                    }} >Searchee</button>
                </div>
                <button id="filter-btn" 
                onClick={()=>{
                    const filteredData = state.filter((resto)=>resto?.info?.avgRating>4.3)
                    setFilteredRestaurant(filteredData);
                }}>Top Rated</button>
            </div>
            <div className="restro-container">
                {
                    // map filtered
                    filteredRestaurant.map((resto)=><RestaurantCard key={resto?.info.parentId} restList={resto}/>)
                }           
            </div>
        </div>
    )
}
export default Body;