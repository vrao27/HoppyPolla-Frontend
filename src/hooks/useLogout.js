import { useAuthContext } from "./useAuthContext";

export const useLogout = () => {
  const { dispatch, setIsAuth } = useAuthContext();

  const logout = () => {
    //update the gloabl state - remove user from storage

    localStorage.removeItem("user");

    //dispatch logout action
    dispatch({ type: "LOGOUT" });
    setIsAuth(false);
  };

  return { logout };
};
