import React, { useState } from "react";
import style from "./Style.Header.module.scss";

const Header = () => {
  const [activeSlide, setActiveSlide] = useState(1);

  const handleSlideChange = (slideIndex) => {
    setActiveSlide(slideIndex);
  };

  return (
    <>
      <div className={style.carousel}>
        <br/><br/><br/>
        <div
          className={`${style.slide} ${activeSlide === 1 ? style.active : ""}`}
        >
          <h1 className={style.bigText} style={{color:'black'}}>Men's Fashion</h1>
          <h2 style={{color:'black'}}>The Tailored is now offering sales on a variety of products.</h2>
        </div>
        <div
          className={`${style.slide} ${activeSlide === 2 ? style.active : ""}`}
        >
          Section 2
        </div>
        <div
          className={`${style.slide} ${activeSlide === 3 ? style.active : ""}`}
        >
          Section 3
        </div>
      </div>
      <div className={style.dotsContainer}>
        <span
          className={`${style.dot} ${activeSlide === 1 ? style.active : ""}`}
          onClick={() => handleSlideChange(1)}
        ></span>
        <span
          className={`${style.dot} ${activeSlide === 2 ? style.active : ""}`}
          onClick={() => handleSlideChange(2)}
        ></span>
        <span
          className={`${style.dot} ${activeSlide === 3 ? style.active : ""}`}
          onClick={() => handleSlideChange(3)}
        ></span>
      </div>

      
    </>
  );
};

export default Header;