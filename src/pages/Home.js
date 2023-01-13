import { useState, useEffect } from "react";

function Carousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [modalOpen, setModalOpen] = useState(false);

  

  const images = [
    { src: require("../images/witbier.jpeg"), alt: "witbier", description: "Witbier is a wheat beer that originated in Belgium. It is usually unfiltered and has a hazy appearance. It is typically brewed with spices such as coriander and orange peel."},
    { src: require("../images/pilsner-1.jpeg"), alt: "pilsner", description: "Pilsner is a pale lager that originated in the Czech Republic. It has a crisp, clean taste and is known for its light color and high carbonation." },
    { src: require("../images/ipa-1.jpeg"), alt: "ipa", description: "India Pale Ale (IPA) is a hoppy beer style that originated in the UK. It is known for its strong bitterness and high alcohol content." },
    { src: require("../images/hefeweizen.jpeg"), alt: "hefeweizen", description: "Hefeweizen is a wheat beer that originated in Germany. It is known for its unique taste and smell, which is often described as spicy and fruity." },
    { src: require("../images/lager.jpeg"), alt: "lager", description: "Lager is a type of beer that is made using bottom-fermenting yeast. It is known for its smooth, clean taste and is typically light-bodied."  },
    { src: require("../images/apa.jpeg"), alt: "merican-pale-ale", description: "American Pale Ale (APA) is a hoppy beer style that is similar to India Pale Ale (IPA) but with a lower alcohol content. It originated in the United States and is known for its piney, citrusy, and floral aroma." },
    { src: require("../images/ale.jpeg"), alt: "ale", description: "Ale is a type of beer that is made using top-fermenting yeast. It is known for its rich and complex taste and is typically full-bodied." },
    { src: require("../images/stout.jpeg"), alt: "stout", description: "Stout is a type of dark beer that is known for its strong, rich flavor and dark color. It is typically made using roasted malts and barley, giving it a deep, dark color and strong flavor." },
  ];

  const [currentDescription, setCurrentDescription] = useState(images[0].description);
  

  useEffect(() => {
    setCurrentDescription(images[currentIndex].description);
  }, [currentIndex, images])

  const prev = () => {
    setCurrentIndex((currentIndex - 1 + images.length) % images.length);
    //setCurrentDescription(images[(currentIndex + images.length) % images.length].description);
    openModal()
  };

  const next = () => {
    setCurrentIndex((currentIndex + 1) % images.length);
    //setCurrentDescription(images[(currentIndex) % images.length].description);
    openModal()
  };

  const openModal = () => {
    setModalOpen(true);
    setCurrentDescription(images[currentIndex].description);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <section>
      <div className="intro container">
      <p>HoppyPolla is a place where brewing is made easy. Brewing is a discipline and knowing your steps and ingredients lets you brew your own lager,ale,pils etc and experiment with flavors profiles that take your beer to the next level</p>
     </div>
    <div className="carousel">
      <h2 className="carousel-header">Beer Types</h2>
      <div onClick={prev} className="arrow prev"></div>
      <img
        className="carousel-img"
        onClick={openModal}
        src={images[currentIndex].src}
        alt={images[currentIndex].alt}
      />
      <div onClick={next} className="arrow next"></div>
      {modalOpen && (
        <div className="modal">
          <div className="modal-description-container">
            <p>{currentDescription}</p>
        </div>
          <button onClick={closeModal}>Close</button>
        </div>
      )}
    </div>
    </section>
     
  );
}

export default Carousel;
