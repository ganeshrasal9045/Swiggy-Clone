import React, { useEffect, useState } from "react";
import Header from "./components/Header";
import { Outlet } from "react-router-dom";
import UserContext from "./utils/UserContext";
import { Provider } from "react-redux";
import appStore from "./redux/appStore";
import "../app.css"
import Footer from "./components/Footer";

const App = () => {

  const [userName, setUserName] = useState()

  useEffect(() => {
    // Make an Api call nd send username and password
    const data = {
      name: "Ganesh Rasal"
    };
    setUserName(data.name)
  }, [])


  return (
    <Provider store={appStore}>
    <UserContext.Provider value={{loggedInUser: userName}}>
      <div className="app">
        <Header />
        <Outlet />
        <Footer />
      </div>
    </UserContext.Provider>
    </Provider>
  );
};

export default App;
