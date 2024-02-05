import React from "react";
import ReactDOM from "react-dom/client";
// *Header
//  -Logo
//  -Nav Items
// *Body
//  -Search
//  -Restaurant Container
//    ->Restaurant Card  -image -starrating -cusines -deliverytime
// Footer
//   -copyright
//   -Links
const Header = () =>(
    <div className="header">
        <div className="logo-container">
            <img className="logo" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgf8RlcJGMxRvmAYnx_DWa69f1t5jfr30W6g&usqp=CAU" />
        </div>
        <div className="nav-items">
            <ul>
                <li>Home</li>
                <li>About Us</li>
                <li>Contact Us</li>
                <li>Cart</li>
            </ul>
        </div>
    </div>
)
// API
const restoList = [
    {
      "data": {
        "name": "McDonald's",
        "cloudinaryImageId": "03501c33ecb3a3105124441e541e6fe4",
        "locality": "Shobha City Mall",
        "areaName": "Puzhakkal",
        "costForTwo": "₹400 for two",
        "cuisines": [
          "Burgers",
          "Beverages",
          "Cafe",
          "Desserts"
        ],
        "avgRating": 4.5,
        "totalRatingsString": "5K+",
        
        "deliveryTime": 33,
        "lastMileTravel": 4.9,
        "serviceability": "SERVICEABLE",
        "slaString": "30-35 mins",
        "lastMileTravelString": "4.9 km",
        "iconType": "ICON_TYPE_EMPTY",
        
        "availability": {
          "nextCloseTime": "2024-02-02 22:45:00",
          "opened": true
        },
       
        "isOpen": true,
        "aggregatedDiscountInfoV3": {
          "header": "30% OFF",
          "subHeader": "UPTO ₹75"
        },
      }
    },
    {
      "data": {
        "id": "90333",
        "name": "KFC",
        "cloudinaryImageId": "f01666ac73626461d7455d9c24005cd4",
        "locality": "Shobha City Mall",
        "areaName": "Puzhakkal",
        "costForTwo": "₹400 for two",
        "cuisines": [
          "Burgers",
          "Biryani",
          "American",
          "Snacks",
          "Fast Food"
        ],
        "avgRating": 4.4,
        "totalRatingsString": "1K+",
          "deliveryTime": 37,
          "lastMileTravel": 6,
          "serviceability": "SERVICEABLE",
          "slaString": "35-40 mins",
          "lastMileTravelString": "6.0 km",
          "iconType": "ICON_TYPE_EMPTY",
        "availability": {
          "nextCloseTime": "2024-02-02 23:00:00",
          "opened": true
        },
        "isOpen": true,
        "aggregatedDiscountInfoV3": {
          "header": "40% OFF",
          "subHeader": "UPTO ₹80"
        },
        "loyaltyDiscoverPresentationInfo": {
          "logoCtx": {
            "logo": "Swiggy%20One%20Lite/One_lite_vertical_logo.png"
          },
          "freedelMessage": "FREE DELIVERY",
          "badgeType": "BADGE_TYPE_ONE_LITE"
        },
        
      }
    },
    {
        "data": {
          "name": "McDonald's",
          "cloudinaryImageId": "03501c33ecb3a3105124441e541e6fe4",
          "locality": "Shobha City Mall",
          "areaName": "Puzhakkal",
          "costForTwo": "₹400 for two",
          "cuisines": [
            "Burgers",
            "Beverages",
            "Cafe",
            "Desserts"
          ],
          "avgRating": 4.5,
          "totalRatingsString": "5K+",
          
          "deliveryTime": 33,
          "lastMileTravel": 4.9,
          "serviceability": "SERVICEABLE",
          "slaString": "30-35 mins",
          "lastMileTravelString": "4.9 km",
          "iconType": "ICON_TYPE_EMPTY",
          
          "availability": {
            "nextCloseTime": "2024-02-02 22:45:00",
            "opened": true
          },
         
          "isOpen": true,
          "aggregatedDiscountInfoV3": {
            "header": "30% OFF",
            "subHeader": "UPTO ₹75"
          },
        }
    },
    {
        "data": {
          "name": "McDonald's",
          "cloudinaryImageId": "03501c33ecb3a3105124441e541e6fe4",
          "locality": "Shobha City Mall",
          "areaName": "Puzhakkal",
          "costForTwo": "₹400 for two",
          "cuisines": [
            "Burgers",
            "Beverages",
            "Cafe",
            "Desserts"
          ],
          "avgRating": 4.5,
          "totalRatingsString": "5K+",
          
          "deliveryTime": 33,
          "lastMileTravel": 4.9,
          "serviceability": "SERVICEABLE",
          "slaString": "30-35 mins",
          "lastMileTravelString": "4.9 km",
          "iconType": "ICON_TYPE_EMPTY",
          
          "availability": {
            "nextCloseTime": "2024-02-02 22:45:00",
            "opened": true
          },
         
          "isOpen": true,
          "aggregatedDiscountInfoV3": {
            "header": "30% OFF",
            "subHeader": "UPTO ₹75"
          },
        }
    },
    {
        "data": {
          "name": "McDonald's",
          "cloudinaryImageId": "03501c33ecb3a3105124441e541e6fe4",
          "locality": "Shobha City Mall",
          "areaName": "Puzhakkal",
          "costForTwo": "₹400 for two",
          "cuisines": [
            "Burgers",
            "Beverages",
            "Cafe",
            "Desserts"
          ],
          "avgRating": 4.5,
          "totalRatingsString": "5K+",
          
          "deliveryTime": 33,
          "lastMileTravel": 4.9,
          "serviceability": "SERVICEABLE",
          "slaString": "30-35 mins",
          "lastMileTravelString": "4.9 km",
          "iconType": "ICON_TYPE_EMPTY",
          
          "availability": {
            "nextCloseTime": "2024-02-02 22:45:00",
            "opened": true
          },
         
          "isOpen": true,
          "aggregatedDiscountInfoV3": {
            "header": "30% OFF",
            "subHeader": "UPTO ₹75"
          },
        }
    },
    {
        "data": {
          "name": "McDonald's",
          "cloudinaryImageId": "03501c33ecb3a3105124441e541e6fe4",
          "locality": "Shobha City Mall",
          "areaName": "Puzhakkal",
          "costForTwo": "₹400 for two",
          "cuisines": [
            "Burgers",
            "Beverages",
            "Cafe",
            "Desserts"
          ],
          "avgRating": 4.5,
          "totalRatingsString": "5K+",
          
          "deliveryTime": 33,
          "lastMileTravel": 4.9,
          "serviceability": "SERVICEABLE",
          "slaString": "30-35 mins",
          "lastMileTravelString": "4.9 km",
          "iconType": "ICON_TYPE_EMPTY",
          
          "availability": {
            "nextCloseTime": "2024-02-02 22:45:00",
            "opened": true
          },
         
          "isOpen": true,
          "aggregatedDiscountInfoV3": {
            "header": "30% OFF",
            "subHeader": "UPTO ₹75"
          },
        }
    },
    {
        "data": {
          "name": "McDonald's",
          "cloudinaryImageId": "03501c33ecb3a3105124441e541e6fe4",
          "locality": "Shobha City Mall",
          "areaName": "Puzhakkal",
          "costForTwo": "₹400 for two",
          "cuisines": [
            "Burgers",
            "Beverages",
            "Cafe",
            "Desserts"
          ],
          "avgRating": 4.5,
          "totalRatingsString": "5K+",
          
          "deliveryTime": 33,
          "lastMileTravel": 4.9,
          "serviceability": "SERVICEABLE",
          "slaString": "30-35 mins",
          "lastMileTravelString": "4.9 km",
          "iconType": "ICON_TYPE_EMPTY",
          
          "availability": {
            "nextCloseTime": "2024-02-02 22:45:00",
            "opened": true
          },
         
          "isOpen": true,
          "aggregatedDiscountInfoV3": {
            "header": "30% OFF",
            "subHeader": "UPTO ₹75"
          },
        }
    },
  ]

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
const Body = () => (
    <div className="body">
        <div className="search">Search</div>
        <div className="restro-container">
    {/* Always use key={} */}
    {/* not using keys(not acceptable) <<< index as key(if no unique id use) <<<  unique id(best practice) */}
            {
                restoList.map((resto,index)=><RestaurantCard key={index} restList={resto}/>)
            }
            {/* <RestaurantCard restList={restoList[0] }/> */}
           
        </div>
    </div>
)
const AppLayout = ()=>{
    return(
        <div>
            <Header/>
            <Body/>
        </div>
    )
}
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout/>);