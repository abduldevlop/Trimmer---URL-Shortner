import { createContext, useContext, useEffect } from "react";
import { getCurrentUser } from "@/db/apiAuth";
import useFeatchApi from "@/hooks/useFeatchApi";

const UrlContext = createContext();

const UrlProvider = ({ children }) => {
  const { data: user, loading, fn: fetchUser } = useFeatchApi(getCurrentUser);

  const isAuthenticated = user?.role === "authenticated";

  useEffect(() => {
    fetchUser();
  }, []);

  return (
    <UrlContext.Provider value={{ user, fetchUser, loading, isAuthenticated }}>
      {children}
    </UrlContext.Provider>
  );
};

export const UrlState = () => {
  return useContext(UrlContext);
};

export default UrlProvider;
