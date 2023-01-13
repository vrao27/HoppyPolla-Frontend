import { useState } from "react";
import { useAuthContext } from "./useAuthContext";

//We use this hook in the signup component

export const useSignup = () => {
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(null);
  const { dispatch } = useAuthContext();

  const signup = async (email, password) => {
    //console.log('Data being sent to the server:', { email, password });

    const port = "http://localhost:4000/api/user/signup";

    setIsLoading(true);
    setError(null);

    const response = await fetch(port, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });

    const json = await response.json();

    //console.log('Server response:', json);

    if (!response.ok) {
      setIsLoading(false);
      setError(json.error);
      console.log("Server error:", response.statusText);
    }

    if (response.ok) {
      //console.log('User data:', json);
      //here we save the user to local storage
      localStorage.setItem("user", JSON.stringify(json));

      //update auth context - here we wanna dispatch the action in connection to the auth context
      dispatch({ type: "LOGIN", payload: json });

      setIsLoading(false);
    }
  };

  return { signup, isLoading, error };
};
