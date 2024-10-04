import { RootState } from "@/redux/store";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

export const useAuth = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const userLoggedIn = useSelector(
    (store: RootState) => store.user.userLoggedIn
  );

  useEffect(() => {
    const token = localStorage.getItem("token");
    setIsLoggedIn(!!token);
  }, []);

  return { isLoggedIn };
};
