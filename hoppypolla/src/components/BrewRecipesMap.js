import { useState, useEffect } from "react";
import { Link, Outlet } from "react-router-dom";
import { useRecipe } from "../context/BrewRecipeContext";

const BrewRecipesMap = ({ brewRecipe }) => {
  const {brewRecipes} = useRecipe();

  return (
    <div className="brewrecipes-map">
      <Link to={`/brew/${brewRecipe._id}`}>
        <h2>{brewRecipe.title.name}</h2>
      </Link>
      <p>Category: {brewRecipe.title.category}</p>
        <Outlet />
    </div>
  );
};

export default BrewRecipesMap;

