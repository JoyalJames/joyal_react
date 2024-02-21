const RestaurantCard = (props) => {
    const {restList} = props;
    return(
    <div className="res-cards">
        <img className="res-logo" alt="res-logo" src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" + restList?.info.cloudinaryImageId}/>
        <h3>{restList?.info.name}</h3>
        <h4>{restList?.info.cuisines.join(',')}</h4>
        <h4>{restList?.info.avgRating}</h4>
        <h4>{restList?.info.costForTwo/100} For Two</h4>
        <h4>{restList?.info.sla.deliveryTime} minutes</h4>
        <h4></h4>
    </div>
    )
}

// Higher order component
// input - RestroCard - Restrocard promoted

// export const  withPromotedLabel = (RestaurantCard){
//     return(props)=>{
//         return(
//             <div>
//                 <label>Promoted</label>
//                 <RestaurantCard {...props}/>
//             </div>
//         )
//     }
// }
export default RestaurantCard;

