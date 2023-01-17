import { useAuthContext } from "../hooks/useAuthContext";
import { useContext } from "react";
import { Outlet, useNavigate } from "react-router-dom";

const LoginMessage = () => {
  const navigate = useNavigate();
  const { isAuth } = useAuthContext();

  return !isAuth ? navigate("/login") : <Outlet />;
};

export default LoginMessage;
