import { useContext } from "react";
import { useRecipe } from "../context/BrewRecipeContext";
import { useParams } from "react-router-dom";

const BrewRecipeDetails = () => {
  const { brewRecipes } = useRecipe();
  const { id } = useParams();
  console.log(id);
  brewRecipes.find((brewRecipe) => id === brewRecipe._id);
  console.log(brewRecipes);

  return (
    <div>
      {brewRecipes
        .filter((brewRecipe) => (id ? id === brewRecipe._id : brewRecipe))
        .map(
          ({
            title: { name, category, defaultQty },
            description,
            brewingWater,
            mashGrains,
            mashSchedule,
            boil,
            fermentation,
          }) => (
            <div className="brew-recipe-details">
              <h1>{name}</h1>
              <p>Category: {category}</p>
              <p>Default Quantity: {defaultQty} Liters</p>
              <h2>Description</h2>
              <p>{description.text}</p>
              <p>Original Gravity: {description.originalGravity}</p>
              <p>Bitterness: {description.bitterness}</p>
              <p>Color: {description.color}</p>
              <p>Alcohol: {description.alcohol}</p>
              <h2>Brewing Water</h2>
              <p>Main Infusion: {brewingWater.mainInfusion}</p>
              <p>Sparge: {brewingWater.sparge}</p>
              <p>Total: {brewingWater.total}</p>
              <h2>Mash Grains</h2>
              <p>{mashGrains.grainType}</p>
              <h2>Mash Schedule</h2>
              <p>Mash In: {mashSchedule.mashIn}</p>
              <p>
                Rest 1: {mashSchedule.rest1.temperature} for{" "}
                {mashSchedule.rest1.time} minutes
              </p>
              <p>
                Rest 2: {mashSchedule.rest2.temperature} for{" "}
                {mashSchedule.rest2.time} minutes
              </p>
              {mashSchedule.rest3 && (
                <p>
                  Rest 3: {mashSchedule.rest3.temperature} for{" "}
                  {mashSchedule.rest3.time} minutes
                </p>
              )}
              <p>Mash Out: {mashSchedule.mashOut}</p>
              <h2>Boil</h2>
              <p>Time: {boil.time} minutes</p>
              <p>Hop Type: {boil.hop_type}</p>
              <p>Additional Ingredients: {boil.hop_add_on}</p>
              <h2>Fermentation</h2>
              <p>Yeast: {fermentation.yeast}</p>
              <p>
                Fermentation Temperature: {fermentation.fermentationTemperature}
              </p>
              <p>Final Gravity: {fermentation.finalGravity}</p>
              <p>Carbonation: {fermentation.carbonation}</p>
            </div>
          )
        )}
    </div>
  );
};

export default BrewRecipeDetails;

// import { useParams, useOutletContext } from "react-router-dom";

//  const BrewRecipeDetails = () => {
//   const { id } = useParams();
//   const { brewRecipe } = useOutletContext();

//   if (!brewRecipe) {
//     return <div>Loading...</div>;
//   }

//   const {
//     title: { name, category, image, defaultQty },
//     description,
//     brewingWater,
//     mashGrains,
//     mashSchedule,
//     boil,
//     fermentation,
//   } = brewRecipe;

//   return (
//     <div className="brew-recipe-details">
//       <h1>{name}</h1>
//       <p>Category: {category}</p>
//       <p>Default Quantity: {defaultQty}</p>
//       <img src={image} alt={name} />
//       <h2>Description</h2>
//       <p>{description.text}</p>
//       <p>Original Gravity: {description.originalGravity}</p>
//       <p>Bitterness: {description.bitterness}</p>
//       <p>Color: {description.color}</p>
//       <p>Alcohol: {description.alcohol}</p>
//       <h2>Brewing Water</h2>
//       <p>Main Infusion: {brewingWater.mainInfusion}</p>
//       <p>Sparge: {brewingWater.sparge}</p>
//       <p>Total: {brewingWater.total}</p>
//       <h2>Mash Grains</h2>
//       <p>{mashGrains.grainType}</p>
//       <h2>Mash Schedule</h2>
//       <p>Mash In: {mashSchedule.mashIn}</p>
//       <p>
//         Rest 1: {mashSchedule.rest1.temperature} for {mashSchedule.rest1.time}{" "}
//         minutes
//       </p>
//       <p>
//         Rest 2: {mashSchedule.rest2.temperature} for {mashSchedule.rest2.time}{" "}
//         minutes
//       </p>
//       {mashSchedule.rest3 && (
//         <p>
//           Rest 3: {mashSchedule.rest3.temperature} for {mashSchedule.rest3.time}{" "}
//           minutes
//         </p>
//       )}
//       <p>Mash Out: {mashSchedule.mashOut}</p>
//       <h2>Boil</h2>
//       <p>Time: {boil.time} minutes</p>
//       <p>Hop Type: {boil.hop_type}</p>
//       <p>Additional Ingredients: {boil.hop_add_on}</p>
//       <h2>Fermentation</h2>
//       <p>Yeast: {fermentation.yeast}</p>
//       <p>Fermentation Temperature: {fermentation.fermentationTemperature}</p>
//       <p>Final Gravity: {fermentation.finalGravity}</p>
//       <p>Carbonation: {fermentation.carbonation}</p>
//     </div>
//   );
// };

// { brewRecipe:{title: {name, category, image, defaultQty}, description, brewingWater, mashGrains, mashSchedule, boil, fermentation} }
