import { createContext, useContext, useState } from "react";

export const UserContext = createContext();

const UserProvider = ({ children }) => {
  const [user, setUser] = useState({ user: "", estado: false });
  const [bodega, setBodega] = useState("");

  return (
    <UserContext.Provider value={{ user, setUser, bodega, setBodega }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;

export const useUserContext = () => useContext(UserContext);
