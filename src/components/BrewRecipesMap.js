
import { Link, Outlet } from "react-router-dom";
import { useRecipe } from "../context/BrewRecipeContext";

const BrewRecipesMap = ({ brewRecipe }) => {


  const {brewRecipes} = useRecipe();

  if (!brewRecipe) return <p>Loading...</p>;

  return (
    <div className="brewrecipe-map">
      <Link to={`/brew/${brewRecipe._id}`}>
        <h2>{brewRecipe.title.name}</h2>
      </Link>
      <p>Category: {brewRecipe.title.category}</p>
        <Outlet />
    </div>
  );
};

export default BrewRecipesMap;

