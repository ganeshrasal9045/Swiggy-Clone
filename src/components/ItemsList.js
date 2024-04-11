import { useDispatch } from "react-redux";
import { CDN_URL } from "../utils/constants";
import { addToCart } from "../redux/cartSlice";

const ItemsList = ({ items }) => {
  // console.log(items)

  // Add to Cart functionality using RTK
  const dispatch = useDispatch();

  const handleAddItem = (item) => {
    // Dispatch an anction
    dispatch(addToCart(item));
  };

  return (
    <div>
      {items.map((item) => (
        <div
          key={item.card.info.id}
          className="p-2 m-2 border-gray-400 border-b-2 text-left flex justify-between"
        >
          <div className="w-9/12">
            <div className="py-1">
              <h2 className="font-medium">{item.card.info.name}</h2>
              <span>
                &#8377;
                {item.card.info.price
                  ? item.card.info.price / 100
                  : item.card.info.defaultPrice / 100}
              </span>
            </div>
            <div className="my-4 text-sm font-extralight">
              <p>{item.card.info.description}</p>
            </div>
          </div>
          <div className="w-2/12 p-4">
            <div className="absolute">
              <button
                className="px-5 py-1 z-0 bg-white shadow-lg mx-8 mt-16 rounded-lg text-orange-600 font-semibold"
                onClick={() => handleAddItem(item)}
              >
                ADD
              </button>
            </div>
            <img
              src={CDN_URL + item.card.info.imageId}
              className="w-32 h-auto rounded-md"
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemsList;
