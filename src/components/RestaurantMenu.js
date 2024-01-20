// import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { ITEM_IMG_CDN_URL, MENU_API } from "../utils/constants";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";
import { useState } from "react";

const RestaurantMenu = () => {
  // const [restoInfo, setRestoInfo] = useState(null);

  //   const params = useParams();
  //   console.log(params)

  const [showIndex, setShowIndex] = useState(null);

  const { restaId } = useParams();
  //   console.log(restaId)

  const restoInfo = useRestaurantMenu(restaId);

  if (restoInfo === null) return <Shimmer />;

  const {
    name,
    cuisines,
    sla,
    totalRatingsString,
    feeDetails,
    costForTwoMessage,
    areaName,
    avgRating,
  } = restoInfo?.cards[0]?.card?.card?.info;
  // console.log(restoInfo?.cards[0]?.card?.card)

  const { itemCards } =
    restoInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card
      ?.card;
  // console.log(itemCards)

  // console.log(restoInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards)

  const categories =
    restoInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c) =>
        c.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );
  // console.log(categories)

  return (
    <div>
      <div className="flex justify-between mx-40">
        {/* Using Tailwind CSS */}
        <div className="my-4">
          <h1 className="font-bold text-xl">{name}</h1>
          <p>{cuisines.join(", ")}</p>
          <p>
            {areaName}, {sla.lastMileTravelString}
          </p>

          <h4 className="my-2">{feeDetails.message}</h4>
          <h3 className="my-2 font-bold text-xl">
            ⏲️ {sla.slaString}{" "}
            <span className="ml-2">💰 {costForTwoMessage}</span>
          </h3>
        </div>

        <div className="mt-10">
          <span className="bg-lime-800 p-1  text-white rounded-md">
            ⭐{avgRating} stars | {totalRatingsString}
          </span>
        </div>
      </div>

      {/* categories accordions */}
      <div>
        {categories.map((category, index) => (
          
          // Controlled Component
          <RestaurantCategory
            key={category?.card?.card?.title}
            catData={category?.card?.card}
            showItems={index === showIndex ? true : false}
            setShowIndex={() => setShowIndex(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default RestaurantMenu;
