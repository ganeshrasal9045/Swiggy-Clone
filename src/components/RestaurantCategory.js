import React, { useState } from "react";
import ItemsList from "./ItemsList";

const RestaurantCategory = ({ catData, showItems, setShowIndex}) => {
  //   console.log(props);

  // const [showItems, setShowItems] = useState(false);

  const handleClick = () => {
    // console.log("clicked...")
    // setShowItems(!showItems);
    setShowIndex();
  };

  //   const { title, itemCards } = props.catData;

  return (
    <div>
      {/* Header - ItemList */}
      <div className="w-9/12 mx-auto my-4 bg-cyan-200 shadow-lg p-4 rounded-sm">
        <div
          className="flex justify-between cursor-pointer"
          onClick={handleClick}
        >
          <span className="font-bold text-base">
            {catData.title} ({catData.itemCards.length})
          </span>
          <span className="font-bold text-2xl">&#8681;</span>
        </div>

        {/* Show items in category when header is clicked */}
        {/* Accordion Body */}
        {showItems && <ItemsList items={catData.itemCards} />}
      </div>
    </div>
  );
};

export default RestaurantCategory;
