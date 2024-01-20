import { createContext } from "react";

// Use Context Hook - for Login User
const UserContext = createContext({
    loggedInUser: "Default User"
})
    
export default UserContext;