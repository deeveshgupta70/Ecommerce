import React, { createContext, useContext, useState, useEffect } from "react";
import { useAuth0 } from "@auth0/auth0-react";

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [myUser, setMyUser] = useState(null);

  const { isAuthenticated, loginWithRedirect, logout, user } = useAuth0();

  useEffect(() => {
    if (isAuthenticated) {
      setMyUser(user);
    } else {
      setMyUser(false);
    }
  }, [isAuthenticated, user]);

  return (
    <UserContext.Provider value={{ loginWithRedirect, logout, myUser }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUserContext = () => {
  return useContext(UserContext);
};
