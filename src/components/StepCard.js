import React, { useState } from "react";

const StepCard = ({ stepNum, title, image, description }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  //By default, the description should be hidden, so the initial value is set to false
  return (
    <div onClick={() => setIsExpanded(!isExpanded)}>
      <h3>
        Step {stepNum}: {title}
      </h3>
      <img src={image} alt={title} className="step-card-img"/>
      {isExpanded && <p>{description}</p>}
    </div>
  );
};

export default StepCard;
