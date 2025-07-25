import { useEffect } from "react";
import { useDispatch } from "react-redux";
import Cookies from "js-cookie";
import { fetchLoggedUserAPI } from "@/api/api";
import { ADD_LOGGEDUSER } from "@/redux/reducers/user_reducer";

export const AppInitializer = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const getLoggedUser = async () => {
      const cookie = Cookies.get("MyTube");
      if (cookie) {
        try {
          const response = await fetchLoggedUserAPI(cookie);
          dispatch(ADD_LOGGEDUSER(response.data.data));
        } catch (error) {
          console.log(error);
        }
      }
    };

    getLoggedUser();
  }, [dispatch]);

  return null;
};
