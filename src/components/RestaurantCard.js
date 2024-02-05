const RestaurantCard = (props) => {
    const {restList} = props;
    return(
    <div className="res-cards">
        <img className="res-logo" alt="res-logo" src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" + restList?.data.cloudinaryImageId}/>
        <h3>{restList?.data.name}</h3>
        <h4>{restList?.data.cuisines.join(',')}</h4>
        <h4>{restList?.data.avgRating}</h4>
        <h4>{restList?.data.costForTwo/100} For Two</h4>
        <h4>{restList?.data.deliveryTime}</h4>
        <h4></h4>
    </div>
    )
}
export default RestaurantCard;