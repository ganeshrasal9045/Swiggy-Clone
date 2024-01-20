import { useContext, useEffect, useState } from "react";
import { LOGO_URL } from "../utils/constants";
import {Link} from "react-router-dom"
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

const Header = () => {
  // console.log("header comp rendered....")

  const [nameBtn, setNameBtn] = useState( "Login");

  // online/offline status - using custom-hook
  const onlineStatus = useOnlineStatus();

  // login user functionality - using Context-hook
  const {loggedInUser} = useContext(UserContext);
  // console.log(loggedInUser);

  // SubScribing to the store using a Selector
  const cartItems = useSelector((store) => store.cart.items);
  // console.log(cartItems);

  useEffect(()=>{
    // console.log("useEffect Called....")
  },[nameBtn])

  return (
    <div className="flex justify-between bg-gray-300 px-4 mx-2 sticky top-0">
      <div className="logoContainer">
        <img
          className="w-44  h-28"
          src={LOGO_URL}
          alt="appLogo"
        />
      </div>

      <div className="flex items-center">
        <ul className="flex p-4 m-4 font-medium">
          <li className="px-4">Online Status: {onlineStatus ? "✔️" : "🔴"}</li>
          <li className="px-4  hover:text-orange-600"><Link className="dynamic-click" to="/">Home</Link></li>
          <li className="px-4  hover:text-orange-600"><Link className="dynamic-click" to="/about">About</Link></li>
          <li className="px-4  hover:text-orange-600"><Link className="dynamic-click" to="/contact">Contact</Link></li>
          <li className="px-4  hover:text-orange-600"><Link className="dynamic-click" to="/grocery">Grocery</Link></li>

          {/* cart */}
          <li className="px-4 mx-2 hover:text-white bg-lime-700 rounded-md"><Link className="dynamic-click" to="/cart">Cart-({cartItems.length} items)</Link></li>

          <button className="px-2 bg-indigo-950 text-white rounded-md" onClick={()=>{
            nameBtn === "Login" ? setNameBtn("Logout") : setNameBtn("Login")
            console.log(nameBtn)
          }}>{nameBtn}</button>

          {/* login user name */}
          <li className="px-4 font-bold">{loggedInUser}</li>

        </ul>
      </div>
    </div>
  );
};

export default Header;
