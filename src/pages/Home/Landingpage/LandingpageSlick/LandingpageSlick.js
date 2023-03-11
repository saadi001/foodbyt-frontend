import React, { useState } from 'react';
// import './Slider.css';

function LandingpageSlick() {

     const slides = [
          <h3>Slide 1</h3>,
          <h3>Slide 2</h3>,
          <h3>Slide 3</h3>,
          <h3>Slide 4</h3>,
          <h3>Slide 5</h3>,
          <h3>Slide 6</h3>
     ]
  const [currentSlide, setCurrentSlide] = useState(0);

  const handleNextSlide = () => {
    setCurrentSlide(currentSlide + 3);
  };

  const handlePrevSlide = () => {
    setCurrentSlide(currentSlide - 3);
  };

  const visibleSlides = slides.slice(currentSlide, currentSlide + 3);

  return (
    <div className="slider-container">
      <div className="slider-wrapper w-full flex gap-3">
        {visibleSlides.map((slide, index) => (
          <div key={index} className="slide">
            {slide}
          </div>
        ))}
      </div>
      <button onClick={handlePrevSlide} disabled={currentSlide === 0}>
        Prev
      </button>
      <button onClick={handleNextSlide} disabled={currentSlide + 3 >= slides.length}>
        Next
      </button>
    </div>
  );
}

export default LandingpageSlick;