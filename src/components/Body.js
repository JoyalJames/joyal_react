import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
// import { withPromotedLabel } from "./RestaurantCard";

const Body = () => {
    const [state,setState]=useState([]);
    const[search,setSearch] = useState("");
    const [filteredRestaurant,setFilteredRestaurant] = useState([]);

    useEffect(()=>{
        fetchData();
    },[]);

    // const RestaurantCardPromoted = withPromotedLabel(RestaurantCard);
    const fetchData = async ()=>{
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=9.591566799999999&lng=76.5221531&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        const json = await data.json();
        console.log(json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants);
        // optional chaining
        setState(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setFilteredRestaurant(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)

    }
  const onlineStatus = useOnlineStatus();
  if (onlineStatus===false) return(<h1 style={{padding:270}}>You Are Offline!.........</h1>)
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
                    const filteredData = state.filter((resto)=>resto?.info?.avgRating>4)
                    setFilteredRestaurant(filteredData);
                }}>Top Rated</button>
            </div>
            <div className="restro-container">
                {
                    // map filtered
                    filteredRestaurant.map((resto)=>(
                        // resto.data.promoted ? <RestaurantCardPromoted restList={resto}/> : 
                        <Link key={resto?.info.parentId} to={"/restaurant/"+resto?.info.parentId}><RestaurantCard restList={resto}/></Link>
                        )
                    )
                }           
            </div>
        </div>
    )
}
export default Body;