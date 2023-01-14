import React, { useState } from "react";
import StepCard from "./StepCard";

const Brewing101 = () => {
  const [steps] = useState([
    {
      stepNum: 1,
      title: "Selecting the right equipment",
      image: require("../images/brew-kit.jpeg"),
      description:
        "Selecting the right equipment is crucial for making great beer. You will need a brew kettle, fermenting vessel, airlock, thermometer, hydrometer, siphon, bottling bucket, bottles and bottle caps, sanitizer and a spoon.",
    },
    {
      stepNum: 2,
      title: "Preparing the ingredients",
      image: "path/to/ingredients.jpg",
      description:
        "Preparing the ingredients is an important step in the brewing process. You will need malt extract, hops, yeast and water. Make sure to use high-quality ingredients for the best results.",
    },
    {
      stepNum: 3,
      title: "Sanitizing the equipment",
      image: "path/to/sanitizing.jpg",
      description:
        "Sanitizing your equipment is essential to prevent bacteria and wild yeast from contaminating your beer. Use a sanitizing solution recommended for brewing and make sure to follow the instructions carefully.",
    },
    {
      stepNum: 4,
      title: "Heating the water and adding the malt extract",
      image: "path/to/heating.jpg",
      description:
        "Heat the water to the right temperature in the brew kettle and then add the malt extract. Stir the mixture until the extract is completely dissolved.",
    },
    {
      stepNum: 5,
      title: "Boiling and adding hops",
      image: "path/to/boiling.jpg",
      description:
        "Bring the mixture to a boil and then add the hops according to the recipe. Boil the mixture for the specified amount of time and then remove from heat.",
    },
    {
      stepNum: 6,
      title: "Cooling the wort",
      image: "path/to/cooling.jpg",
      description:
        "Cool the wort as quickly as possible to room temperature. You can use a wort chiller or place the brew kettle in an ice bath.",
    },
    {
      stepNum: 7,
      title: "Pitching the yeast",
      image: "path/to/pitching.jpg",
      description:
        "Pitch the yeast into the cooled wort. Make sure to aerate the wort by shaking or stirring before adding the yeast.",
    },
    {
      stepNum: 8,
      title: "Fermenting",
      image: "path/to/fermenting.jpg",
      description:
        "Place the fermenting vessel in a warm and dark place and let the beer ferment for the specified amount of time. Monitor the fermentation and take hydrometer readings to track the progress.",
    },
    {
      stepNum: 9,
      title: "Bottling and carbonating",
      image: "path/to/bottling.jpg",
      description:
        "Siphon the beer into a bottling bucket, add priming sugar and then bottle the beer.",
    },
    {
      stepNum: 10,
      title: "Aging and conditioning",
      image: "path/to/aging.jpg",
      description:
        "Store the bottled beer at room temperature for at least two weeks to allow the yeast to carbonate the beer. Then, store the beer in a cool and dark place for at least two weeks to allow the flavors to develop and condition.",
    },
    {
      stepNum: 11,
      title: "Enjoying your homemade beer",
      image: "path/to/enjoying.jpg",
      description:
        "Congratulations, you have made your own beer! Be sure to store it properly, serve it at the right temperature and enjoy responsibly.",
    },
  ]);

  return (
    <div>
      <h2>Brewing 101: For Beginners</h2>
      {steps.map((step, index) => (
        <StepCard key={index} {...step} />
      ))}
    </div>
  );
};

export default Brewing101;
