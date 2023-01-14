//this is a modal for the description section of the Brewing 101 step cards//

import React, { useState } from "react";

const Modal = ({ description }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => {
    setIsOpen(true);
  };

const handleClose = () => {
    setIsOpen(false);
};

  return (
    <>
    <button onClick={handleOpen}>View Description</button>
    {isOpen && (
        <div className={`modal-overlay ${isOpen ? 'open': ''}`}>
        <div className="modal-content">
          <p>{description}</p>
          <button onClick={handleClose}>Close</button>
        </div>
      </div>
    )}
  </>
  );
};

export default Modal;
