import React, { useState, useEffect } from 'react';
import Modal from 'react-modal';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination } from 'swiper';

import Header from '../components/Header';

import room1Img1 from '../assets/img/gallSlider/1.png';
import room1Img2 from '../assets/img/gallSlider/2.png';
import room1Img3 from '../assets/img/gallSlider/3.png';
import room2Img1 from '../assets/img/gallSlider/4.png';
import room2Img2 from '../assets/img/gallSlider/5.png';
import room2Img3 from '../assets/img/gallSlider/6.png';
import room3Img1 from '../assets/img/gallSlider/7.png';
import room3Img2 from '../assets/img/gallSlider/8.png';
import room3Img3 from '../assets/img/gallSlider/9.png';
import room10Img1 from '../assets/img/gallSlider/10.png';
import room11Img1 from '../assets/img/gallSlider/11.png';
import room20Img1 from '../assets/img/gallSlider/20.png';
import room21Img1 from '../assets/img/gallSlider/21.png';
import room12Img1 from '../assets/img/gallSlider/12.png';
import room13Img1 from '../assets/img/gallSlider/13.png';
import room14Img1 from '../assets/img/gallSlider/14.png';
import room15Img1 from '../assets/img/gallSlider/15.png';
import room16Img1 from '../assets/img/gallSlider/16.png';
import room17Img1 from '../assets/img/gallSlider/17.png';
import room22Img1 from '../assets/img/gallSlider/22.png';
import room23Img1 from '../assets/img/gallSlider/23.png';
import room24Img1 from '../assets/img/gallSlider/24.png';

Modal.setAppElement('#root');

const Gallery = () => {
  const [headerScrolled, setHeaderScrolled] = useState(false);
  const [selectedTab, setSelectedTab] = useState('all');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalPosition, setModalPosition] = useState('center'); // Default position is center
  const [modalImages, setModalImages] = useState([]); // State to hold modal images

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setHeaderScrolled(true);
      } else {
        setHeaderScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleTabClick = (tab) => {
    setSelectedTab(tab);
  };

  const openModal = (images) => {
    setModalImages(images); // Set modal images based on clicked room type
    setIsModalOpen(true);
    setModalPosition('bottom'); // Set modal position to bottom when opening
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setModalImages([]); // Clear modal images when closing
  };

  return (
    <div>
      <Header />

      <div className={`container mx-auto ${headerScrolled ? 'pt-32' : 'pt-24'} py-8 text-center`}>
        <h1 className="text-4xl font-bold mb-8">Gallery</h1>

        {/* Toggle Buttons */}
        <div className="flex justify-center space-x-4 mb-8">
          <ToggleButton
            text="All"
            isSelected={selectedTab === 'all'}
            onClick={() => handleTabClick('all')}
          />
          <ToggleButton
            text="Property"
            isSelected={selectedTab === 'property'}
            onClick={() => handleTabClick('property')}
          />
          <ToggleButton
            text="Restaurant"
            isSelected={selectedTab === 'restaurant'}
            onClick={() => handleTabClick('restaurant')}
          />
          <ToggleButton
            text="Rooms"
            isSelected={selectedTab === 'rooms'}
            onClick={() => handleTabClick('rooms')}
          />
          <ToggleButton
            text="Washroom"
            isSelected={selectedTab === 'washroom'}
            onClick={() => handleTabClick('washroom')}
          />
        </div>

        {/* Gallery Section */}
        <div className="flex flex-col gap-6 items-center">
          {selectedTab === 'all' && (
            <div className="p-4 border rounded-lg hover:shadow-lg transition-shadow duration-300 w-full">
              <div onClick={() => openModal([room1Img1, room1Img2, room1Img3, room2Img1, room2Img2, room2Img3, room3Img1, room3Img2, room3Img3, room10Img1, room11Img1, room20Img1, room21Img1, room12Img1, room13Img1, room14Img1, room15Img1, room16Img1, room17Img1, room22Img1, room23Img1, room24Img1])} className="cursor-pointer">
                <div className="relative">
                  <img src={room1Img1} alt="All Images" className="object-cover w-full h-80 lg:h-96 rounded-lg" />
                  <div className="absolute bottom-0 left-0 p-4 text-white">
                    <p className="text-lg font-bold">View All Images</p>
                  </div>
                </div>
              </div>
            </div>
          )}
          {selectedTab === 'property' && (
            <PropertySection openModal={() => openModal([room10Img1, room11Img1, room20Img1, room21Img1])} />
          )}
          {selectedTab === 'rooms' && (
            <GallerySection
              openModal={(roomType) => {
                if (roomType === 'suit') {
                  openModal([room2Img1, room1Img2, room1Img3]); 
                } else if (roomType === 'queen') {
                  openModal([room2Img2, room2Img1, room2Img3]); // Adding room2Img1 and room2Img3 to Queen Room
                } else if (roomType === 'superior') {
                  openModal([room2Img3, room3Img1, room3Img2, room3Img3]); // Adding room3Img1, room3Img2, and room3Img3 to Superior Room
                }
              }}
              headerScrolled={headerScrolled}
            />
          )}
          {selectedTab === 'washroom' && (
            <WashroomSection openModal={() => openModal([room22Img1, room23Img1, room24Img1])} />
          )}
          {selectedTab === 'restaurant' && (
            <RestaurantSection openModal={() => openModal([room12Img1, room13Img1, room14Img1, room15Img1, room16Img1, room17Img1])} />
          )}
        </div>
      </div>

      <Modal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        contentLabel="Image Modal"
        className={`fixed inset-0 flex items-center justify-center p-6 bg-gray-1100 bg-opacity-85 ${modalPosition === 'bottom' ? 'bottom-0' : ''}`}
        overlayClassName="fixed inset-0 bg-black bg-opacity-50"
      >
        <div className="bg-white p-4 rounded-lg max-w-3xl w-full">
          <button onClick={closeModal} className="text-black text-xl font-bold mb-4">
            Close
          </button>
          <Swiper
            autoplay={{ delay: 3000, disableOnInteraction: false }} // Autoplay with 3s delay
            navigation={true}
            pagination={{ clickable: true }}
            modules={[Navigation, Pagination]}
            className="mySwiper"
          >
            {/* Display modal images */}
            {modalImages.map((img, index) => (
              <SwiperSlide key={index}>
                <img src={img} alt={`Room gallery ${index + 1}`} className="object-cover w-full h-80 lg:h-96 rounded-lg" />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </Modal>
    </div>
  );
};

const ToggleButton = ({ text, isSelected, onClick }) => (
  <button
    className={`text-lg font-bold py-2 px-4 flex items-center justify-center hover:text-red-400 transition-colors ${
      isSelected ? 'text-red-400' : 'text-gray-700'
    }`}
    onClick={onClick}
  >
    {text}
  </button>
);

const PropertySection = ({ openModal }) => (
  <div className="p-4 border rounded-lg hover:shadow-lg transition-shadow duration-300 w-full">
    <div onClick={openModal} className="cursor-pointer">
      <div className="relative">
        <img src={room10Img1} alt="Property Images" className="object-cover w-full h-80 lg:h-96 rounded-lg" />
        <div className="absolute bottom-0 left-0 p-4 text-white">
          <p className="text-lg font-bold">View our Property Images</p>
        </div>
      </div>
    </div>
  </div>
);

const WashroomSection = ({ openModal }) => (
  <div className="p-4 border rounded-lg hover:shadow-lg transition-shadow duration-300 w-full">
    <div onClick={openModal} className="cursor-pointer">
      <div className="relative">
        <img src={room22Img1} alt="Washroom Images" className="object-cover w-full h-80 lg:h-96 rounded-lg" />
        <div className="absolute bottom-0 left-0 p-4 text-white">
          <p className="text-lg font-bold">View Washroom Images</p>
        </div>
      </div>
    </div>
  </div>
);

const RestaurantSection = ({ openModal }) => (
  <div className="p-4 border rounded-lg hover:shadow-lg transition-shadow duration-300 w-full">
    <div onClick={openModal} className="cursor-pointer">
      <div className="relative">
        <img src={room12Img1} alt="Restaurant Images" className="object-cover w-full h-80 lg:h-96 rounded-lg" />
        <div className="absolute bottom-0 left-0 p-4 text-white">
          <p className="text-lg font-bold">View Restaurant Images</p>
        </div>
      </div>
    </div>
  </div>
);

const GallerySection = ({ openModal, headerScrolled }) => (
  <div className="p-4 border rounded-lg hover:shadow-lg transition-shadow duration-300 w-full">
    <div className="flex flex-col lg:flex-row gap-4">
      <div className="w-full lg:w-1/2">
        <div className="relative">
          <img
            onClick={() => openModal('suit')}
            src={room2Img1}
            alt={`Suit Room`}
            className="object-cover w-full h-80 lg:h-96 rounded-lg cursor-pointer"
          />
          <div className="absolute bottom-0 left-0 p-4 text-red-400">
            <p className="text-lg font-bold">Suit Room</p>
          </div>
        </div>
      </div>
      <div className="w-full lg:w-1/2">
        <div className="relative">
          <img
            onClick={() => openModal('queen')}
            src={room2Img2}
            alt={`Queen Room`}
            className="object-cover w-full h-80 lg:h-96 rounded-lg cursor-pointer"
          />
          <div className="absolute bottom-0 left-0 p-4 text-red-400">
            <p className="text-lg font-bold">Queen Room</p>
          </div>
        </div>
      </div>
      <div className="w-full lg:w-1/2">
        <div className="relative">
          <img
            onClick={() => openModal('superior')}
            src={room2Img3}
            alt={`Superior Room`}
            className="object-cover w-full h-80 lg:h-96 rounded-lg cursor-pointer"
          />
          <div className="absolute bottom-0 left-0 p-4 text-red-400">
            <p className="text-lg font-bold">Superior Room</p>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Gallery;
