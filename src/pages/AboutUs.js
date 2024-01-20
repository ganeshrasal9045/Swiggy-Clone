import React, { useContext } from "react";
import UserContext from "../utils/UserContext";

const AboutUs = () => {

  const{loggedInUser} = useContext(UserContext);
  return (
    <div className="m-5 p-5 text-center">
      <span className="bg-cyan-700 text-white p-2 text-base">This is a About Us Page</span>
      <p className="text-lg m-2">{loggedInUser}</p>
    </div>
  );
};

export default AboutUs;
