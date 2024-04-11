import { useEffect, useState } from "react";
import RestaurantCard, { withVegLabel } from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import { SWIGGY_API_URL } from "../utils/constants";
import useOnlineStatus from "../utils/useOnlineStatus";

const Main = () => {
  const [listOfResto, setListOfResto] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [fiteredResto, setfiteredResto] = useState([]);

  // console.log(listOfResto);

  const RestaurantCardVeg = withVegLabel(RestaurantCard);

  // Api call - inside useEffect-hook
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async() => {
    try {
      const response = await fetch(SWIGGY_API_URL);

      const json = await response.json();
      console.log(json);

      setListOfResto(
        json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants
      );
      // console.log(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);

      setfiteredResto(
        json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants
      );
    } catch (error) {
      console.log("Error.....");
    }
  };

  const isOnline = useOnlineStatus();

  if (isOnline === false) {
    return (
      <h1 className="text-center bg-red-600 text-white m-4 p-4 font-bold">
        Look's like you're offline!!! Please check your internet connection;
      </h1>
    );
  }

  // shimmer effect for better user experience - use of shimmer UI
  return listOfResto?.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="main-container">
      <div className="flex justify-center">

                 {/* Search functionality - name, areaName */}
        <div className="m-4 p-4">
          <input
            data-testid="searchInput"
            className=" border-2 border-gray-500 px-2 rounded-md  focus:border-teal-500"
            type="text"
            placeholder="search"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
            className="mx-2 px-2 bg-indigo-950 text-white rounded-md"
            onClick={() => {
              // console.log(searchText);
              const filteredRestaurant = listOfResto.filter((resto) =>
                resto.info.name.toLowerCase().includes(searchText.toLowerCase()) ||
                resto.info.areaName.toLowerCase().includes(searchText.toLowerCase())
              );
              // setListOfResto(filteredRestaurant);
              setfiteredResto(filteredRestaurant);
              // console.log(filteredRestaurant)
            }}
          >
            Search
          </button>
        </div>

            {/* Top Rated Restaurants > 4.2 star rating */}
        <div className=" my-8 ">
          <button
            className="px-2 bg-indigo-950 text-white rounded-md"
            onClick={() => {
              let filteredList = listOfResto.filter(
                (res) => res.info.avgRating > 4.2
              );
              // console.log(filteredList)
              setfiteredResto(filteredList);
            }}
          >
            Top Rated Restaurants
          </button>
        </div>
      </div>

      <div className=" flex flex-wrap ml-2">
        {fiteredResto &&
          fiteredResto.map((restaurant) => (
            <Link
              className="dynamic-click"
              key={restaurant?.info?.id}
              to={"/restaurants/" + restaurant?.info?.id}
            >
              {restaurant.info.veg ? (
                <RestaurantCardVeg restoData={restaurant} />
              ) : (
                <RestaurantCard restoData={restaurant} />
              )}
            </Link>
          ))}
      </div>
    </div>
  );
};

export default Main;
