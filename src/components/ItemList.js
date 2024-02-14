import { addItems } from "../utils/cartSlice";
import { CDN_URL } from "../utils/constants";
import { useDispatch } from "react-redux";

const ItemList = ({ items, dummy }) => {
  const dispatch = useDispatch();

  const handleAddItem = (item, price) => {
    dispatch(addItems({ item, price }));
  };

  return (
    <div>
      {items.map((item) => (
        <div
          key={item.card.info.id}
          className="p-2 m-2 border-b-2 border-gray-300 text-left flex justify-between"
        >
          <div className="w-9/12">
            <div className="py-2">
              <span>{item.card.info.name} </span>
              <span>
                {" "}
                : Rs./-
                {item.card.info.defaultPrice / 100 ||
                  item.card.info.price / 100}
              </span>
            </div>
            <p className="text-xs">{item.card.info.description}</p>
          </div>
          <div className="">
            <div className="absolute">
              <button
                className="rounded-lg bg-black text-white shadow-lg"
                onClick={() => {
                  handleAddItem(
                    item.card.info.name,
                    item.card.info.price / 100
                  );
                }}
              >
                Add +
              </button>
            </div>
            <img src={CDN_URL + item.card.info.imageId} className="w-20" />
          </div>
        </div>
      ))}
    </div>
  );
};
export default ItemList;
