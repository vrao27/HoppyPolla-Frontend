import { createContext, useContext, useState, useEffect } from "react";

const BrewRecipeContext = createContext();

const useRecipe = () => useContext(BrewRecipeContext);

const BrewRecipeContextProvider = ({ children }) => {
  const port = "http://localhost:4000/api/brewrecipes";
  const [brewRecipes, setBrewRecipes] = useState([]);

  useEffect(() => {
    const fetchRecipes = async () => {
      const response = await fetch(port);
      const json = await response.json();
      return setBrewRecipes(json);
    };
    fetchRecipes();
  }, []);

  return (
    <BrewRecipeContext.Provider value={{ brewRecipes, setBrewRecipes }}>
      {children}
    </BrewRecipeContext.Provider>
  );
};

export { useRecipe, BrewRecipeContext, BrewRecipeContextProvider };
