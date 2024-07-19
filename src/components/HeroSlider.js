import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-fade';
import { EffectFade, Autoplay } from 'swiper';
import Img1 from '../assets/img/heroSlider/1.jpg';
import Img2 from '../assets/img/heroSlider/2.png';
import Img3 from '../assets/img/heroSlider/3.jpg';
import { Link } from 'react-router-dom'; // Use Link for navigation

const slides = [
  {
    title: 'Your Luxury Hotel For Vacation',
    bg: Img1,
  },
  {
    title: 'Your Luxury Hotel For Vacation',
    bg: Img2,
  },
  {
    title: 'Your Luxury Hotel For Vacation',
    bg: Img3,
  },
];

const HeroSlider = () => {
  return (
    <div id='home'>
      <Swiper
        modules={[EffectFade, Autoplay]}
        effect={'fade'}
        loop={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        className='heroSlider h-[600px] lg:h-[860px]'
      >
        {slides.map((slide, index) => {
          const { title, bg } = slide;
          return (
            <SwiperSlide
              className='h-full relative flex justify-center items-center'
              key={index}
            >
              <div className='z-20 text-white text-center'>
                <div className='uppercase font-tertiary tracking-[6px] mb-5'>
                  Just Enjoy and relax
                </div>
                <h1 className='text-[32px] font-primary uppercase tracking-[2px] max-w-[920px] lg:text-[68px] leading-tight mb-6 text-shadow'>
                  {title}
                </h1>
                <Link to='/HomeReview'>
                  <button className='text-white py-2 px-4 rounded mt-4 bg-transparent border border-white text-lg'>
                    User Rating & Reviews
                  </button>
                </Link>
              </div>
              <div className='absolute top-0 w-full h-full'>
                <img className='object-cover h-full w-full' src={bg} alt='Slide Background' />
              </div>
              <div className='absolute w-full h-full bg-black/50'></div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default HeroSlider;
