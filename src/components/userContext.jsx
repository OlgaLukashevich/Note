import { useContext } from "react";
import { useCallback } from "react";
import { useState } from "react";
import { useMemo } from "react";

import { createContext } from "react";

const UserContext = createContext({ user: {}, setUser: () => {} });

export const useUserContext = () => {
  return useContext(UserContext);
};

export default function UserContextProvider({ children }) {
  const [user, setUser] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem("user"));
    } catch (e) {
      return {};
    }
  });

  const handleSetUser = useCallback((user) => {
    const userString = JSON.stringify(user);
    localStorage.setItem("user", userString);
    setUser(user);
  }, []);

  const value = useMemo(
    () => ({ user, setUser: handleSetUser }),
    [user, handleSetUser]
  );

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
}
