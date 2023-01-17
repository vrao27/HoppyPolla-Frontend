import { useAuthContext } from "../hooks/useAuthContext";
import { useContext } from "react";
import { Outlet, Navigate } from "react-router-dom";
import LoginMessage from "./LoginMessage";

const Auth = () => {
  const { isAuth } = useAuthContext();
  console.log(isAuth)
  return !isAuth ? <LoginMessage /> : <Outlet />;
};

export default Auth;
