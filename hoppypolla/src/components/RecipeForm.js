import  { useState } from "react";



const BeerRecipeForm = () => {
const [error, setError] = useState(null)

const [title, setTitle] = useState({
    name: "",
    category: "",
    defaultQty: "",
    image: "",
  });

const [description, setDescription] = useState({
    text: "",
    originalGravity: "",
    bitterness: "",
    color: "",
    alcohol: "",
  });

const [brewingWater, setBrewingWater] = useState({
    mainInfusion: "",
    sparge: "",
    total: "",
  });

const [mashGrains, setMashGrains] = useState({
    grainType: "",
  });

const [mashSchedule, setMashSchedule] = useState({
    mashIn: "",
    rest1: {
      temperature: "",
      time: "",
    },
    rest2: {
      temperature: "",
      time: "",
    },
    rest3: {
      temperature: "",
      time: "",
    },
    mashOut: "",
  });

const [boil, setBoil] = useState({
    time: "",
    hopType: "",
    hopAddOn: "",
  });

  const [fermentation, setFermentation] = useState({
    yeast: "",
    fermentationTemperature: "",
    finalGravity: "",
    carbonation: "",
  });

  const handleTitleChange = (event) => {
    setTitle({ ...title, [event.target.name]: event.target.value });
  };

  const handleDescriptionChange = (event) => {
    setDescription({ ...description, [event.target.name]: event.target.value });
  };

  const handleBrewingWaterChange = (event) => {
    setBrewingWater({
      ...brewingWater,
      [event.target.name]: event.target.value,
    });
  };

  const handleMashGrainsChange = (event) => {
    setMashGrains({ ...mashGrains, [event.target.name]: event.target.value });
  };

  const handleMashScheduleChange = (event) => {
    if (event.target.name.startsWith("rest")) {
      setMashSchedule({
        ...mashSchedule,
        [event.target.name]: {
          ...mashSchedule[event.target.name],
          [event.target.dataset.field]: event.target.value,
        },
      });
    } else {
      setMashSchedule({
        ...mashSchedule,
        [event.target.name]: event.target.value,
      });
    }
  };

  const handleBoilChange = (event) => {
    setBoil({ ...boil, [event.target.name]: event.target.value });
  };

  const handleFermentationChange = (event) => {
    setFermentation({
      ...fermentation,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const recipe = {
      title,
      description,
      brewingWater,
      mashGrains,
      mashSchedule,
      boil,
      fermentation,
    };

    fetch("/api/brewrecipes", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(recipe),
    })
      .then((res) => res.json())
      .then((res) => {
        console.log('new recipe added',res);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  return (
    <form className="create-recipe" onSubmit={handleSubmit}>
      <h2>Title</h2>
      <label>
        Name:
        <input
          type="text"
          name="name"
          value={title.name}
          onChange={handleTitleChange}
        />
      </label>
      <br />
      <label>
        Category:
        <input
          type="text"
          name="category"
          value={title.category}
          onChange={handleTitleChange}
        />
      </label>
      <br />
      <label>
        Default Quantity:
        <input
          type="number"
          name="defaultQty"
          value={title.defaultQty}
          onChange={handleTitleChange}
        />
      </label>
      <br />
      <h2>Description</h2>
      <label>
        Text:
        <textarea
          name="text"
          value={description.text}
          onChange={handleDescriptionChange}
        />
      </label>
      <br />
      <label>
        Original Gravity:
        <input
          type="number"
          name="originalGravity"
          value={description.originalGravity}
          onChange={handleDescriptionChange}
        />
      </label>
      <br />
      <label>
        Bitterness:
        <input
          type="number"
          name="bitterness"
          value={description.bitterness}
          onChange={handleDescriptionChange}
        />
      </label>
      <br />
      <label>
        Color:
        <input
          type="number"
          name="color"
          value={description.color}
          onChange={handleDescriptionChange}
        />
      </label>
      <br />
      <label>
        Alcohol:
        <input
          type="number"
          name="alcohol"
          value={description.alcohol}
          onChange={handleDescriptionChange}
        />
      </label>
      <h2>Brewing Water</h2>
      <label>
        Main Infusion:
        <input
          type="text"
          name="mainInfusion"
          value={brewingWater.mainInfusion}
          onChange={handleBrewingWaterChange}
        />
      </label>
      <br />
      <label>
        Sparge:
        <input
          type="text"
          name="sparge"
          value={brewingWater.sparge}
          onChange={handleBrewingWaterChange}
        />
      </label>
      <br />
      <label>
        Total:
        <input
          type="text"
          name="total"
          value={brewingWater.total}
          onChange={handleBrewingWaterChange}
        />
      </label>
      <h2>Mash Grains</h2>
      <label>
        Grain Type:
        <input
          type="text"
          name="grainType"
          value={mashGrains.grainType}
          onChange={handleMashGrainsChange}
        />
      </label>
      <h2>Mash Schedule</h2>
      <label>
        Mash In:
        <input
          type="number"
          name="mashIn"
          value={mashSchedule.mashIn}
          onChange={handleMashScheduleChange}
        />
      </label>
      <br />
      <h3>Rest 1</h3>
      <label>
        Temperature:
        <input
          type="number"
          name="rest1"
          data-field="temperature"
          value={mashSchedule.rest1.temperature}
          onChange={handleMashScheduleChange}
        />
      </label>
      <br />
      <label>
        Time:
        <input
          type="number"
          name="rest1"
          data-field="time"
          value={mashSchedule.rest1.time}
          onChange={handleMashScheduleChange}
        />
      </label>
      <br />
      <h3>Rest 2</h3>
      <label>
        Temperature:
        <input
          type="number"
          name="rest2"
          data-field="temperature"
          value={mashSchedule.rest2.temperature}
          onChange={handleMashScheduleChange}
        />
      </label>
      <br />
      <label>
        Time:
        <input
          type="number"
          name="rest2"
          data-field="time"
          value={mashSchedule.rest2.time}
          onChange={handleMashScheduleChange}
        />
      </label>
      <br />
      <h3>Rest 3</h3>
      <label>
        Temperature:
        <input
          type="number"
          name="rest3"
          data-field="temperature"
          value={mashSchedule.rest3.temperature}
          onChange={handleMashScheduleChange}
        />
      </label>
      <br />
      <label>
        Time:
        <input
          type="number"
          name="rest3"
          data-field="time"
          value={mashSchedule.rest3.time}
          onChange={handleMashScheduleChange}
        />
      </label>
      <br />
      <label>
        Mash Out:
        <input
          type="number"
          name="mashOut"
          value={mashSchedule.mashOut}
          onChange={handleMashScheduleChange}
        />
      </label>
      <h2>Boil</h2>
      <label>
        Time:
        <input
          type="number"
          name="time"
          value={boil.time}
          onChange={handleBoilChange}
        />
      </label>
      <br />
      <label>
        Hop Type:
        <input
          type="text"
          name="hopType"
          value={boil.hopType}
          onChange={handleBoilChange}
        />
      </label>
      <br />
      <label>
        Hop Add-On:
        <input
          type="text"
          name="hopAddOn"
          value={boil.hopAddOn}
          onChange={handleBoilChange}
        />
      </label>
      <h2>Fermentation</h2>
      <label>
        Yeast:
        <input
          type="text"
          name="yeast"
          value={fermentation.yeast}
          onChange={handleFermentationChange}
        />
      </label>
      <br />
      <label>
        Fermentation Temperature:
        <input
          type="number"
          name="fermentationTemperature"
          value={fermentation.fermentationTemperature}
          onChange={handleFermentationChange}
        />
      </label>
      <br />
      <label>
        Final Gravity:
        <input
          type="number"
          name="finalGravity"
          value={fermentation.finalGravity}
          onChange={handleFermentationChange}
        />
      </label>
      <br />
      <label>
        Carbonation:
        <input
          type="number"
          name="carbonation"
          value={fermentation.carbonation}
          onChange={handleFermentationChange}
        />
      </label>
      <br />
      <button type="submit">Submit</button>
    </form>
  );
};

export default BeerRecipeForm;
