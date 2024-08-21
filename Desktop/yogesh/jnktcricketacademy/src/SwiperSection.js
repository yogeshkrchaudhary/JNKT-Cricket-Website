import React, { useEffect } from 'react';
import Swiper from 'swiper';
// import 'swiper/swiper-bundle.min.css';

const SwiperSection = () => {
  useEffect(() => {
    new Swiper('.mySwiper', {
      slidesPerView: 4,
      spaceBetween: 30,
      slidesPerGroup: 4,
      loop: true,
      grabCursor: true,
      loopFillGroupWithBlank: true,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    });
  }, []);

  return (
    <div className="swiper-container mySwiper">
      {/* Swiper Slides */}
      <div className="swiper-wrapper">
        {/* Your slides here */}
      </div>
      {/* Add Pagination and Navigation buttons */}
      <div className="swiper-pagination"></div>
      <div className="swiper-button-next"></div>
      <div className="swiper-button-prev"></div>
    </div>
  );
};

export default SwiperSection;
