import React, { useState } from "react";
import style from "./Style.Header.module.scss";

const Header = () => {
  const [activeSlide, setActiveSlide] = useState(1);
  const [activeSlideOne, setActiveSlideOne] = useState(2);
  const [activeSlideTwo, setActiveSlideTwo] = useState(3);

  const handleSlideChange = (slideIndex) => {
    setActiveSlide(slideIndex);
  };

  return (
    <>
      <div className={style.carousel}>
        <div
          className={`${style.slide} ${activeSlide === 1 ? style.active : "slide"}`}
        >
          <h1 className={style.bigText}>sale</h1>
          <h2>Lorem ipsunm dolo sit amet conse ctetuyr </h2>
        </div>
        <div
          className={`${style.slideOne} ${activeSlideOne === 2 ? style.activeOne : "slideOne"}`}
        >
          Section 2
        </div>
        <div
          className={`${style.slideTwo} ${activeSlideTwo === 3 ? style.activeTwo : "slideTwo"}`}
        >
          Section 3
        </div>
      </div>
      <div className={style.dotsContainer}>
        <span
          className={`${style.dot} ${activeSlide === 1 ? style.active : "slide"}`}
          onClick={() => handleSlideChange(1)}
        ></span>
        <span
          className={`${style.dot} ${activeSlideOne === 2 ? style.activeOne : "slideOne"}`}
          onClick={() => handleSlideChange(2)}
        ></span>
        <span
          className={`${style.dot} ${activeSlideTwo === 3 ? style.activeTwo : "slideTwo"}`}
          onClick={() => handleSlideChange(3)}
        ></span>
      </div>

      
    </>
  );
};

export default Header;
