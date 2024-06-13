import React, { useState, useEffect } from 'react';
import { IoIosArrowDropright, IoIosArrowDropleft } from "react-icons/io";

const Testimonial = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    { id: 1, content: 'Consequat urna vestibulum egestas ultricies lorem ut aliquam felis nisl. Eget in ullamcorper mauris viverra tortor etiam auctor. Nunc etiam mattis congue pulvinar eu ultrices. Nullam ut nibh felis gravida. Faucibus maecenas egestas vulputate sit proin condimentum. Feugiat at enim mattis sed.', name: "Mr Daniel Akujobi Etraffika" },
    { id: 2, content: 'Consequat urna vestibulum egestas ultricies lorem ut aliquam felis nisl. Eget in ullamcorper mauris viverra tortor etiam auctor. Nunc etiam mattis congue pulvinar eu ultrices. Nullam ut nibh felis gravida. Faucibus maecenas egestas vulputate sit proin condimentum. Feugiat at enim mattis sed.', name: "Mr Moses Akujobi Etraffika" },
    { id: 3, content: 'Consequat urna vestibulum egestas ultricies lorem ut aliquam felis nisl. Eget in ullamcorper mauris viverra tortor etiam auctor. Nunc etiam mattis congue pulvinar eu ultrices. Nullam ut nibh felis gravida. Faucibus maecenas egestas vulputate sit proin condimentum. Feugiat at enim mattis sed.', name: "Mr Akujobi Etraffika" }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 3000);

    return () => clearInterval(interval);
  }, [currentSlide]);

  const nextSlide = () => {
    setCurrentSlide((currentSlide + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((currentSlide - 1 + slides.length) % slides.length);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  return (
    <div className="testimonial">
      <h3>Testimonial</h3>
      <div className="slider">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`slide testimonial-text ${index === currentSlide ? 'active' : ''}`}
          >
            <p>{slide.content}</p>
            <h4>{slide.name}</h4>
            <button className="nav prev" onClick={prevSlide}>
              <IoIosArrowDropleft />
            </button>
            <button className="nav next" onClick={nextSlide}>
              <IoIosArrowDropright />
            </button>
          </div>
        ))}
      </div>
      <div className="dots">
        {slides.map((_, index) => (
          <span
            key={index}
            className={`dot ${index === currentSlide ? 'active' : ''}`}
            onClick={() => goToSlide(index)}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default Testimonial;
