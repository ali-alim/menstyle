import React, { useState} from 'react';
import "./slider.scss";
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const sliderImages = [
  "images/slider_2.webp",
  "images/slider_3.avif",
  "images/slider_4.avif"
]

const Slider = () => {

  const [ currentSlide, setCurrentSlide ] = useState(0);

  const prevSlide = () => {
    setCurrentSlide(currentSlide === 0 ? 2 : (prev) => prev - 1);
  }
  const nextSlide = () => {
    setCurrentSlide(currentSlide === 2 ? 0 : (prev) => prev + 1);
  }

  return (
    <div className="slider">
      <div className="container" style={{ transform: `translateX(-${currentSlide * 100}vw)`}}>
        <img src={sliderImages[0]} alt="2" />
        <img src={sliderImages[1]} alt="3" />
        <img src={sliderImages[2]} alt="4" />
      </div>
      <div className="icons">
        <div className="icon" onClick={prevSlide}>
          <ArrowBackIosIcon fontSize="inherit" color="inherit" />
        </div>
        <div className="icon" onClick={nextSlide}>
          <ArrowForwardIosIcon fontSize="inherit" color="inherit" />
        </div>
      </div>
    </div>
  )
}

export default Slider