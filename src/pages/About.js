import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import { EffectFade, Autoplay, Navigation } from "swiper";
import Header from "../components/Header";
import Img1 from "../assets/img/aboutSlider/1.png";
import Img2 from "../assets/img/aboutSlider/2.png";
import Img3 from "../assets/img/aboutSlider/3.png";
import BackgroundImage from "../assets/img/bg.png";

const images = [Img1, Img2, Img3];

const AboutPage = () => {
  return (
    <div className="relative">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-40"
        style={{ backgroundImage: `url(${BackgroundImage})` }}
      ></div>
      <div className="relative z-10">
        <Header />
        <div className="container mx-auto pt-32 py-12 flex flex-wrap lg:flex-nowrap">
          <div className="w-full lg:w-1/2 lg:pr-8 relative mb-8 lg:mb-0">
            <Swiper
              modules={[EffectFade, Autoplay, Navigation]}
              effect="fade"
              loop={true}
              autoplay={{
                delay: 3000,
                disableOnInteraction: false,
              }}
              navigation={true}
              className="h-[300px] lg:h-[600px]"
            >
              {images.map((image, index) => (
                <SwiperSlide
                  key={index}
                  className="flex justify-center items-center"
                >
                  <img
                    src={image}
                    alt={`About ${index + 1}`}
                    className="object-cover h-full w-full cursor-pointer"
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
          <div className="w-full lg:w-1/2 lg:pl-8">
            <h2 className="text-3xl font-bold mb-4">About Us</h2>
            <p className="text-lg mb-4">
              Oak by Signature Group Airport Zone shamshabad Hyderabad, You have
              a choice of superbly done up 45 rooms, which are the ultimate in
              comfort and elegance. The 22 Signature Comfort, 17 Signature
              Superior, 6 Signature Suits are ultimate in comfort and elegance.
            </p>
            <p className="text-lg mb-4">
              Oak by Signature Group Airport Zone shamshabad Hyderabad is the
              right choice for who are searching for a combination of charm,
              peace and quiet, and a convenient position from which to explore
              Shamshabad Airport and Hyderabad. It is well designed,
              comfortable hotel, situated on the Shamshabad International
              Airport Zone. The Signature hotel staff offer an attentive,
              personalized service and are always available to offer any help to
              guests.
            </p>
            <p className="text-lg mb-4">
              Oak by Signature Group is arranged on five floors, with a lift. On
              the ground floor, apart from the reception, there is a comfortable
              lounge where you can sit and have drinks and food, or just read
              books and newels. There is also a splendid terrace, where, you can
              relax and immerge yourself from morning onwards in the atmosphere
              of daily life.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
