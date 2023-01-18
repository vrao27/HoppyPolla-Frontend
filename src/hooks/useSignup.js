import { useState } from "react";
import { useAuthContext } from "./useAuthContext";


//Set the port variable here for fetch calls

// const PORT = process.env.PORT || 5000;
const PORT = process.env.PORT 
const baseURL = `http://localhost:${PORT}/api/user`;
const signupURL = `${baseURL}/signup`;

//We use this hook in the signup component

export const useSignup = () => {
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(null);
  const { dispatch, setIsAuth } = useAuthContext();

  const signup = async (email, password) => {
    //console.log('Data being sent to the server:', { email, password });


    setIsLoading(true);
    setError(null);

    const response = await fetch(signupURL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });

    const json = await response.json();

    console.log('Server response:', json);

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
      setIsAuth(true);
    }
  };

  return { signup, isLoading, error };
};
