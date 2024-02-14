import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";
import { useState } from "react";
const RestaurantMenu = () => {
  const dummy = "dummyData";
  const { resId } = useParams();
  const resInfo = useRestaurantMenu(resId);
  const [showIndex, setShowIndex] = useState(null);

  if (resInfo === null) return <Shimmer />;

  const { name, cuisines, costForTwoMessage } =
    resInfo?.cards[0]?.card?.card?.info;

  const categories =
    resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c) =>
        c.card?.card?.["@type"] ==
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );
  return (
    <div className="text-center">
      <h1 className="font-bold text-2xl m-3">{name}</h1>
      <p className="font-bold text-lg">
        {cuisines.join(", ")} - {costForTwoMessage}
      </p>
      <p>
        {categories.map((category, index) => (
          <RestaurantCategory
            key={category?.card?.card?.title}
            data={category?.card?.card}
            showItems={index == showIndex ? true : false}
            setShowIndex={() => setShowIndex(index)}
            dummy={dummy}
          />
        ))}
      </p>
    </div>
  );
};

export default RestaurantMenu;
