import { useContext, useEffect, useState } from "react";
import resList from "../utils/mockData";
import RestaurantCard, { withPromotedLabel } from "./RestaurantCard";

import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [filteredList, setFilteredList] = useState([]);
  const [searchText, setSearchText] = useState("");

  const RestaurantCardPromoted = withPromotedLabel(RestaurantCard);
  const { loggedInUser, setUserName } = useContext(UserContext);
  console.log("this is context", loggedInUser);
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    // const data = await fetch(
    //   "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    // );
    // const json = await data.json();
    // console.log(
    //   "here is the data: " +
    //     json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants.info
    // );
    // setListOfRestaurants(
    //   json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    // );

    // setFilteredList(
    //   json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    // );
    setListOfRestaurants(resList);
    setFilteredList(resList);
  };
  const onlineStatus = useOnlineStatus();
  //conditional rendering
  if (onlineStatus === false) {
    return (
      <h1>
        Looks like you are offline !! Please check your internet connection!!
      </h1>
    );
  }
  return listOfRestaurants == 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="flex">
        <div className="search m-4 p-4">
          <input
            type="text"
            className="border border-solid border-black  "
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
            className="m-4 px-4 py-1 bg-green-200 rounded-md"
            onClick={() => {
              const filteredList = listOfRestaurants.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase())
              );

              setFilteredList(filteredList);
            }}
          >
            Search
          </button>
        </div>
        <div className="m-4 p-4 flex items-center">
          <button
            className="bg-gray-200 m-4 p-1 rounded-md"
            onClick={() => {
              const filteredList = listOfRestaurants.filter(
                (res) => res.info.avgRating > 4.3
              );
              setFilteredList(filteredList);
            }}
          >
            Top Rated Restaurant
          </button>
        </div>
        <div className="m-4 p-4 flex items-center">
          <label>UserName : </label>
          <input
            className="border border-black p-2"
            value={loggedInUser}
            onChange={(e) => setUserName(e.target.value)}
          />
        </div>
      </div>
      <div className="flex flex-wrap">
        {filteredList.map((restaurant) => {
          return (
            <Link
              key={restaurant.info.id}
              to={"/restaurants/" + restaurant.info.id}
            >
              {restaurant.info.promoted ? (
                <RestaurantCardPromoted resData={restaurant} />
              ) : (
                <RestaurantCard resData={restaurant} />
              )}
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Body;
