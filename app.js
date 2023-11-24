import React from "react";
import ReactDOM from "react-dom/client";
import resObj from "./resData.json";
const root = ReactDOM.createRoot(document.getElementById("root"));
const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img
          className="logo"
          src="https://wanderon.in/_next/image?url=https%3A%2F%2Fstatic.wanderon.in%2Fwp-content%2Fuploads%2F2022%2F10%2Fcaribbean-dishes-barbados-food.jpg&w=1920&q=75"
        />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};
const RestaurantCard = (props) => {
 console.log(props.resData.info.name);
  const { name,cuisines,avgRating,costForTwo,sla,cloudinaryImageId } = props.resData.info;
  return (
    <div className="res-card">
      <img
        className="res-logo"
        alt="res-logo"
        src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"+cloudinaryImageId}
      />

      <h3>{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{avgRating}</h4>
      <h4>{costForTwo}</h4>
      <h4>{sla.deliveryTime} mins</h4>
    </div>
  );
};

const Body = () => {
  return (
    <div className="body">
      <div className="Search">Search</div>
      <div className="res-container">
        {resObj.map((restaurant) =>{
          console.log(restaurant);
          return (<RestaurantCard key={restaurant.info.id} resData={restaurant}/>)
        }
        )}
      </div>
    </div>
  );
};

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};
root.render(<AppLayout />);
