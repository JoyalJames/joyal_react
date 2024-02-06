const RestaurantCard = (props) => {
    const {restList} = props;
    return(
    <div className="res-cards">
        <img className="res-logo" alt="res-logo" src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" + restList?.info.cloudinaryImageId}/>
        <h3>{restList?.info.name}</h3>
        <h4>{restList?.info.cuisines.join(',')}</h4>
        <h4>{restList?.info.avgRating}</h4>
        <h4>{restList?.info.costForTwo/100} For Two</h4>
        <h4>{restList?.info.deliveryTime}</h4>
        <h4></h4>
    </div>
    )
}
export default RestaurantCard;