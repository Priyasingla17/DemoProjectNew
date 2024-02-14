import { useContext } from "react";
import { CDN_URL } from "../utils/constants";
import UserContext from "../utils/UserContext";
const RestaurantCard = (props) => {
  const { name, cuisines, avgRating, costForTwo, sla, cloudinaryImageId } =
    props.resData.info;
  const { loggedInUser } = useContext(UserContext);
  return (
    <div className="m-4 p-4 w-[250px] rounded-lg bg-slate-200 hover:bg-slate-300 ">
      <img
        className="rounded-lg"
        alt="res-logo"
        src={CDN_URL + cloudinaryImageId}
      />

      <h3 className="font-bold py-4 text-lg">{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{avgRating}</h4>
      <h4>{costForTwo}</h4>
      <h4>{sla.deliveryTime} mins</h4>
      <h4>User: {loggedInUser}</h4>
    </div>
  );
};

export const withPromotedLabel = (RestaurantCard) => {
  return (props) => {
    return (
      <div>
        <label className="absolute bg-black text-white rounded-lg m-3 p-1">
          Promoted
        </label>
        <RestaurantCard {...props} />
      </div>
    );
  };
};
export default RestaurantCard;
