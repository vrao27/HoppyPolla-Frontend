import { useAuthContext } from "../hooks/useAuthContext";
import { useContext } from "react";
import { Outlet, Navigate } from "react-router-dom";
import Login from '../pages/Login';

const LoginMessage = () => {
  return (
    <div>
      <h3>To create a reacipe you need to sign in!</h3>
      <Login />
    </div>
  );
};

export default LoginMessage;
