import { useState } from "react";
import ItemList from "./ItemList";
const RestaurantCategory = ({ data, showItems, setShowIndex, dummy }) => {
  const [showList, setShowList] = useState(showItems);
  const handleClick = () => {
    setShowList(!showList);
    setShowIndex();
  };
  return (
    <div>
      <div className="w-6/12 mx-auto my-4 bg-gray-100 shadow-lg">
        <div
          className="flex justify-between cursor-pointer"
          onClick={handleClick}
        >
          <span className="font-bold text-lg">
            {data.title} ({data.itemCards.length})
          </span>
          <span>{"🔽"}</span>
        </div>
        {showItems && showList && (
          <ItemList items={data.itemCards} dummy={dummy} />
        )}
      </div>
    </div>
  );
};
export default RestaurantCategory;
