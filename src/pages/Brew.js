import { useEffect, useState, useContext } from "react";
//import BrewRecipeDetails from "../components/BrewRecipeDetails";
import BrewRecipesMap from "../components/BrewRecipesMap";
import { Link } from "react-router-dom";
import { useRecipe } from "../context/BrewRecipeContext";

const BrewRecipe = () => {
  const { brewRecipes, setBrewRecipes } = useRecipe();


  console.log(brewRecipes);
  return (
    <div className="brewRecipe">
      {brewRecipes &&
        brewRecipes.map((brewRecipe) => (
          <Link to={`/brew/${brewRecipe._id}`} key={brewRecipe._id}>
            <BrewRecipesMap brewRecipe={brewRecipe} />
          </Link>
        ))}
    </div>
  );
};

export default BrewRecipe;

