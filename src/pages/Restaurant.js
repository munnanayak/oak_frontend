import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import { EffectFade, Autoplay, Navigation } from 'swiper';

import Header from '../components/Header';
import menuImage from '../assets/img/menu.png'; // Ensure this path is correct
import Img1 from '../assets/img/restaSlider/1.jpg'; // Ensure this path is correct
import Img2 from '../assets/img/restaSlider/2.png'; // Ensure this path is correct
import Img3 from '../assets/img/restaSlider/3.jpg'; // Ensure this path is correct
import BackgroundImage from '../assets/img/bg.png'; // Import the background image

const images = [Img1, Img2, Img3];

const Restaurant = () => {
  const [isMenuModalOpen, setIsMenuModalOpen] = useState(false);
  const [selectedMenuImage, setSelectedMenuImage] = useState('');

  const openMenuModal = (image) => {
    setSelectedMenuImage(image);
    setIsMenuModalOpen(true);
  };

  const closeMenuModal = () => {
    setSelectedMenuImage('');
    setIsMenuModalOpen(false);
  };

  const handleModalClick = (e) => {
    // Check if the click occurred outside the image modal
    if (e.target.classList.contains('modal-overlay')) {
      closeMenuModal();
    }
  };

  return (
    <div className="relative">
      <Header />
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-40"
        style={{ backgroundImage: `url(${BackgroundImage})` }}
      ></div>
      {/* Main Content */}
      <div className="relative container mx-auto pt-32 py-12 flex flex-wrap lg:flex-nowrap">
        {/* Left-side image section */}
        <div className="w-full lg:w-1/2 lg:pr-8 relative mb-8 lg:mb-0">
          <Swiper
            modules={[EffectFade, Autoplay, Navigation]}
            effect="fade"
            loop={true}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            navigation={true} // Enable navigation
            className="h-[300px] lg:h-[500px]"
          >
            {images.map((image, index) => (
              <SwiperSlide
                key={index}
                className="flex justify-center items-center"
              >
                <img
                  src={image}
                  alt={`Restaurant ${index + 1}`}
                  className="object-cover h-full w-full cursor-pointer"
                  onClick={() => openMenuModal(image)}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        {/* Right-side about section */}
        <div className="w-full lg:w-1/2 lg:pl-8">
          <div className="text-3xl font-bold mb-4 text-primary">Our Restaurant</div>
          <p className="text-lg mb-4 leading-relaxed">
            Welcome to our restaurant! We offer a variety of delicious dishes made from the freshest ingredients.
            Our mission is to provide an exceptional dining experience for all our guests.
          </p>
          <p className="text-lg mb-4 leading-relaxed">
            Whether you are here for a casual meal or a special occasion, we strive to make your visit memorable.
            Our friendly staff is here to assist you with any special requests or dietary needs.
          </p>
          <button
            onClick={() => openMenuModal(menuImage)}
            className="text-white bg-primary py-2 px-4 rounded-md hover:bg-primary-dark transition-colors"
          >
            View Our Menu
          </button>
        </div>
      </div>
      {/* Menu Modal */}
      {isMenuModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 modal-overlay" onClick={handleModalClick}>
          <div className="max-w-screen-lg w-full bg-white p-8 rounded-lg shadow-lg overflow-auto">
            <button
              onClick={closeMenuModal}
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-700 focus:outline-none"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <img
              src={selectedMenuImage}
              alt="Menu"
              className="w-full max-h-full object-contain"
              style={{ maxHeight: '80vh' }}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Restaurant;
