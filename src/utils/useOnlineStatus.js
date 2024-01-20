import { useEffect, useState } from "react";

// Custom Hook - online/offline
const useOnlineStatus = () => {
  const [onlineStatus, setOnlineStatus] = useState(true);

  useEffect(() => {
    window.addEventListener("offline", () => {
      setOnlineStatus(false);
    });

    window.addEventListener("online", () => {
      setOnlineStatus(true);
    });
  }, []);

  // Boolean value;
  return onlineStatus;
};

export default useOnlineStatus;
