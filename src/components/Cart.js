import { useDispatch, useSelector } from "react-redux";
import { clearCart, removeItems } from "../utils/cartSlice";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();
  const handleClearCart = () => {
    dispatch(clearCart());
  };

  const handleRemoveItems = (item) => {
    console.log("sdsf");
    dispatch(removeItems(item));
  };

  return (
    <div className="text-center m-4 p-4">
      <h1 className="text-2xl font-bold">Cart</h1>
      <button
        className="p-2 m-2 bg-black text-white rounded-lg"
        onClick={handleClearCart}
      >
        Clear Cart
      </button>
      {cartItems.length == 0 && (
        <h1>Your cart is empty. Please add some items to the cart !!</h1>
      )}
      <div className="w-6/12 m-auto">
        {cartItems.map((items) => (
          <div>
            {items.item} : {items.price}
            <button
              className="p-2 m-2 bg-black text-white rounded-lg"
              onClick={() => handleRemoveItems(items)}
            >
              RemoveItem
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cart;
