
import { createContext, useContext, useState, useEffect } from "react";
import { useAuthContext } from "../hooks/useAuthContext";

const BrewRecipeContext = createContext();

const useRecipe = () => useContext(BrewRecipeContext);


//set the Port here 
const PORT = process.env.PORT || 5000;
const baseURL = `http://localhost:${PORT}/api/brewrecipes`;


const BrewRecipeContextProvider = ({ children }) => {
  

  const [brewRecipes, setBrewRecipes] = useState([]);

  const { user } = useAuthContext();

  useEffect(() => {
    const fetchRecipes = async () => {
      //need to add an extra step to verify if there is a user and token and only then fetch recipes
      const token = user.token;
      console.log(user)
      if (user && token) {
        const response = await fetch(baseURL, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        if (response.ok) {
          const json = await response.json();
          return setBrewRecipes(json);
          //console.log(json)
        } else {
          console.log("Error fetching brewRecipes");
        }
      } else {
        setBrewRecipes([]);
      }
    };
    fetchRecipes();
  }, [user]);


  //this is for trouble shooting, I am able to see the data in the console with the token provided.

  // const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2M2MzZTRmZjRlNzljNWI2OWY5ZmE2N2EiLCJpYXQiOjE2NzM3ODUzOTYsImV4cCI6MTY3NDA0NDU5Nn0.p_Vgt6eh82SPja0VcNtiMLDwtpMriFtD1Z2uYojV7hc"

  //   useEffect(() => {
  //     const fetchRecipes = async () => {
  //       try {
  //         const response = await fetch(port, {
  //             method: 'GET',
  //             headers: {
  //                 'Authorization': 'Bearer ' + token
  //             }
  //         });
  //         console.log('headers stringify:', response.headers); // check the headers of the response
  //         console.log(response.status); // check the status of the response
  //         const json = await response.json();
  //         console.log(json); // check the body of the response
  //         setBrewRecipes(json);
  //       } catch (error) {
  //         console.log(error); // check the error message
  //       }
  //     };
  //     fetchRecipes();
  //   }, []);

  return (
    <BrewRecipeContext.Provider value={{ brewRecipes, setBrewRecipes }}>
      {children}
    </BrewRecipeContext.Provider>
  );
};

export { useRecipe, BrewRecipeContext, BrewRecipeContextProvider };
