import { useContext } from "react";
import { CDN_URL } from "../utils/constants";
import UserContext from "../utils/UserContext";

const RestaurantCard = (props) => {
  const { restoData } = props;
  // console.log(props);

  // console.log(restoData)

  const {
    cloudinaryImageId,
    name,
    cuisines,
    locality,
    areaName,
    avgRating,
    costForTwo,
    sla,
    deliveryTime,
  } = restoData.info;

  // console.log(restoData.info)

  return (
    <div
      data-testid="resCard"
      className="m-4 p-4 w-[300px] h-[410px] bg-cyan-200 hover:bg-cyan-500 rounded-lg"
    >
      <img
        className="rounded-xl mb-2"
        src={CDN_URL + cloudinaryImageId}
        alt="restoImg"
      />
      <h3 className="font-bold">{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>
        {locality}, {areaName}
      </h4>
      <h4 className="font-medium my-1">
        <span className="bg-lime-800 p-1  text-white rounded-md">
          ⭐ {avgRating}
        </span>{" "}
        &#8226; <span>{sla.deliveryTime} mins</span>
      </h4>
      <h4 className="font-semibold">{costForTwo}</h4>
    </div>
  );
};

// Higher Order Component(HOC)
// input - RestaurantCard => RestaurantCardVeg

// Veg-Label functionality
export const withVegLabel = (RestaurantCard) => {
  return (props) => {
    return (
      <div>
        <label className="absolute bg-red-700 text-white m-4 p-1 rounded-md">
          Pure Veg
        </label>
        <RestaurantCard {...props} />
      </div>
    );
  };
};

export default RestaurantCard;
