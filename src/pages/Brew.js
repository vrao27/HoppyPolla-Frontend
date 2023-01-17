import BrewRecipesMap from "../components/BrewRecipesMap";
import { Link } from "react-router-dom";
import { useRecipe } from "../context/BrewRecipeContext";
import LoginMessage from "../components/LoginMessage";
import { useAuthContext } from "../hooks/useAuthContext";
import { useEffect } from "react";

const BrewRecipe = () => {
  const { brewRecipes, setBrewRecipes } = useRecipe();
  const { isAuth } = useAuthContext();

  //console.log(brewRecipes);

  //adding this extra layer so that if there is no user then the upon logout the login form is automatically re-rendered and the recipes are gon

  useEffect(() => {
    if (!isAuth) {
      setBrewRecipes([]);
    }
  }, [isAuth]);

  //Wrap the whole div so that it is rendered and the css is active when user logs in other set back to original state
  return (
    <>
      {isAuth && (
        <div className="brewRecipes container">
          {brewRecipes &&
            brewRecipes.map((brewRecipe) => (
              <Link to={`/brew/${brewRecipe._id}`} key={brewRecipe._id}>
                <BrewRecipesMap brewRecipe={brewRecipe} />
              </Link>
            ))}
        </div>
      )}
      {!isAuth && <LoginMessage />}
    </>
  );
};

export default BrewRecipe;
