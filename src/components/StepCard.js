import React, { useState } from "react";
import Modal from "../components/Modal";

const StepCard = ({ stepNum, title, image, description }) => {
  const [isExpanded, setIsExpanded] = useState(false);



  return (
    <div
      className={`step-card ${isExpanded ? "expanded" : ""}`}
      onClick={() => setIsExpanded(!isExpanded)}
    >
      <h3>
        Step {stepNum}: {title}
      </h3>
      <img src={image} alt={title} className="step-card-img" />
      <Modal description={description} />
    </div>
  );
};

export default StepCard;
