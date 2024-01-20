import { useDispatch, useSelector } from "react-redux";
import ItemsList from "./ItemsList";
import { clearCart } from "../redux/cartSlice";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  // console.log(cartItems);

  // clear-cart - using RTK tool
  const dispatch = useDispatch();

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  return (
    <div className="text-center m-4 p-4">
      <h2 className="text-2xl font-bold">Cart</h2>
      <div className="w-9/12 m-auto">
        <button
          className="m-1 p-1 bg-indigo-950 text-white rounded-lg"
          onClick={handleClearCart}
        >
          Clear Cart
        </button>
        <ItemsList items={cartItems} />
        {cartItems.length === 0 ? (
          <span className="my-2 p-1 bg-amber-600 rounded-lg">
            <strong>Cart Empty</strong>, order some yummy items from the menu.
          </span>
        ) : (
          <span className="my-2 p-1 bg-amber-600 rounded-lg">
            <strong>Good food is always cooking!</strong>,Go ahead.
          </span>
        )}
      </div>
    </div>
  );
};

export default Cart;
