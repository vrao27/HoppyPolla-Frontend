import React, { useState } from 'react';

const StepCard = ({ stepNum, title, image, description }) => {
  const [isExpanded, setIsExpanded] = useState(false);
//By default, the description should be hidden, so the initial value is set to false
  return (
    <div onClick={() => setIsExpanded(!isExpanded)}>
      <img src={image} alt={title} />
      <h3>Step {stepNum}: {title}</h3>
      {isExpanded && <p>{description}</p>}
    </div>
  );
}

export default StepCard;