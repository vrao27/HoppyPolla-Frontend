import React, { useState } from "react";
import StepCard from "../components/StepCard";

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
      image: require("../images/ingredients.jpeg"),
      description:
        "Preparing the ingredients is an important step in the brewing process. You will need malt mix, hops, yeast and water. Make sure to use high-quality ingredients for the best results.",
    },
    {
      stepNum: 3,
      title: "Sanitizing the equipment",
      image: require("../images/sanitization.webp"),
      description:
        "Sanitizing your equipment is essential to prevent bacteria and wild yeast from contaminating your beer. Use a sanitizing solution recommended for brewing and make sure to follow the instructions carefully.",
    },
    {
      stepNum: 4,
      title: "Mashing",
      image: require("../images/maltmix.jpeg"),
      description:
        "Heat the water to the right temperature in the brew kettle and then add the malt mixture. The malt mixture contains many grains that need to be mashed at a specific temperature, and then you need to extract the sugars from the grains. This process is called mashing. Make sure to use a high-quality malt mixture for the best results.",
    },
    {
      stepNum: 5,
      title: "Sparging",
      image: require("../images/sparging.jpeg"),
      description:
        "Once the mashing process is complete, you'll need to sparge the grain bed to extract as much sugar as possible. This is typically done by slowly adding hot water to the mash tun while continuously stirring the mixture. The liquid that is collected is called wort, which is then brought to a boil.",
    },
    {
      stepNum: 6,
      title: "Boiling and adding hops",
      image: require("../images/hopping.jpeg"),
      description:
        "After the mashgrains and wort have been separted, bring the wort to a rolling boil and then add the hops according to the recipe. The timing of when the hops are added affects the flavor and aroma of the beer. Boil the mixture for the specified amount of time, usually between 60 and 90 minutes and then remove from heat.",
    },
    {
      stepNum: 7,
      title: "Cooling the wort",
      image: require("../images/wortcooling.jpeg"),
      description:
        "Cool the wort as quickly as possible to room temperature. You can use a wort chiller or place the brew kettle in an ice bath.",
    },
    {
      stepNum: 8,
      title: "Pitching the yeast",
      image: require("../images/yeastpitch.webp"),
      description:
        "After the wort reaches 80F (27C) degrees or less (check with your cleaned and sanitized thermometer), pour into your fermenter. Use a sanitized funnel to fill your carboy, or just pour into a fermentation bucket. Add your chosen yeast strain to the wort, using sanitized scissors to open the package. If your yeast manufacturer has specific instructions on details like stirring it in, not stirring it in, rehydrating, etc, follow those instructions. Otherwise, just add the yeast to the wort at this point. Cover your fermenter with the lid or the stopper, fill the airlock up to the line with water or sanitizer and place the airlock in the hole on the top of the closure.",
    },
    {
      stepNum: 9,
      title: "Fermenting",
      image: require("../images/fermentation.jpeg"),
      description:
        "Now place the fermenter in a cool dark place. Ideally, an ale will generally be fermented at 60-70F (16-21C). If you have a glass carboy and the room is not without direct sunlight or bright light, a blanket or dark towel over the fermenter will be needed to protect the fermenting beer from light. The yeast strain used is what determines the correct fermentation temperature, so check the manufacturers' specifications for your yeast strain. All the yeast companies have nice websites with the optimum temperature for each strain, as well as other helpful information. Approximately 12-36 hours later, you should notice some fermentation activity. Foam may rise up (called ‘krausen’) near the top of the vessel, and you may see your airlock bubble. After about a week or so, fermentation may be finished or nearly so. If your recipe calls for dryhops to add to the fermenter, this is the time to do so. Then the beer will start to clear, and sediment and spent yeast will fall to the bottom of your fermenter.",
    },
    {
      stepNum: 10,
      title: "Bottling and Carbonating",
      image: require("../images/bottling.jpeg"),
      description:
        "Once fermentation is complete, the beer should be siphoned into a bottling bucket. A measured amount of priming sugar is added to the beer, usually around 3/4 cup of corn sugar per 5 gallons of beer, this will create carbonation in the beer. The beer is then bottled using a bottling wand, which attaches to the bottom of the bottling bucket, and fills the bottles while leaving a small amount of headspace at the top of each bottle. The bottles are then capped and stored at room temperature for 2-3 weeks, during which time the yeast will consume the priming sugar and carbonate the beer.",
    },

    {
      stepNum: 11,
      title: "Aging and Conditioning",
      image: require("../images/conditioning.jpeg"),
      description:
        "After bottling and carbonation, the beer should be stored in a cool and dark place, ideally between 45-55 degrees Fahrenheit, for a minimum of 2-3 weeks. This will allow the yeast to complete the carbonation process and the flavors to develop and mature. The beer should be stored in an upright position, allowing the yeast sediment to settle at the bottom of the bottle. This aging process can be extended to several months to get a more complex flavor profile.",
    },

    {
      stepNum: 12,
      title: "Enjoying your homemade beer",
      image: require("../images/finalbrew.jpeg"),
      description:
        "Congratulations, you have crafted your own unique beer! The final step is to savor and enjoy the fruits of your labor.Make sure to properly store your beer and serve it at the appropriate temperature for the specific style you brewed. For example, lagers and pilsners should be served colder than ales and stouts. Take note of the aroma, color, carbonation, flavor, and mouthfeel of your beer and how it compares to commercial examples of the same style.Most importantly, enjoy your beer responsibly, and always drink in moderation. Cheers!",
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
