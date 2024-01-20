import { useEffect, useState } from "react";
import { MENU_API } from "./constants";

// Use Custom Hook - for separate logic give Single Responsibility

const useRestaurantMenu = (restaId) => {
    const [restoInfo, setRestoInfo] = useState(null);

    // fetch Api
    useEffect(()=>{
        fetchData();
    }, [])

    const fetchData = async () => {
        const data = await fetch(MENU_API + restaId);
        const json = await data.json();
        setRestoInfo(json.data);
    };

    return restoInfo;
}

export default useRestaurantMenu;