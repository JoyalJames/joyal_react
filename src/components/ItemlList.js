// import { LOGO_URL } from "../utils/constants";
const ItemlList = ({items}) => {
    console.log(items);

  return (
    <div>
            {items.map((item)=>(
                <div key={item.card.info.id} className="p-2 m-2  border-gray-200 border-b-2 text-left flex justify-between">
                    <div className="w-9/12">
                        <div className="py-2"><span>{item.card.info.name}</span><span>  - Rs {item.card.info.price/100}</span></div>
                        <p>{item.card.info.desc}</p>
                    </div>
                    <div className="w-3/12">
                        <div className="absolute"><button className="p-2 bg-white shadow-lg">Add+</button></div>
                        <img src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"  + item.card.info.imageId} className="w-full"/>
    
                    </div>
                </div>
            )
            )}
    </div>
  )
}

export default ItemlList