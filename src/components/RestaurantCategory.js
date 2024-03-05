import { useState } from "react";
import ItemlList from "./ItemlList";

const RestaurantCategory = ({data,showItem})=>{
    // console.log(data); 
    // const [showItem,setShowItem]=useState(false);  
    const handleClick=()=>{
        // setShowItem(!showItem)
    }
    return(
       <div>
        {/* {Accordian Header} */}
            <div className="w-6/12 mx-auto my-4 bg-gray-50 shadow-lg p-4 ">
                <div  className="flex justify-between cursor-pointer" onClick={handleClick}>
                    <span className="font-bold text-lg">{data.title} ({data.itemCards.length})</span>
                    <span>🔽 </span>
                </div>
                
           { showItem && <ItemlList items={data.itemCards}/>}

            </div>
            {/* {Accordian Body}  -> anothercomponent */}

       </div> 
    )
}
export default RestaurantCategory;