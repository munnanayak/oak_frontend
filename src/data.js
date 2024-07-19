// rooms images
import Room1Img from './assets/img/rooms/1.png';
import Room1ImgLg from './assets/img/rooms/1-lg.png';
import Room2Img from './assets/img/rooms/2.png';
import Room2ImgLg from './assets/img/rooms/2-lg.png';
import Room3Img from './assets/img/rooms/3.png';
import Room3ImgLg from './assets/img/rooms/3-lg.png';
import Room4Img from './assets/img/rooms/4.png';
import Room4ImgLg from './assets/img/rooms/4-lg.png';
import Room5Img from './assets/img/rooms/5.png';
import Room5ImgLg from './assets/img/rooms/5-lg.png';
import Room6Img from './assets/img/rooms/6.png';
import Room6ImgLg from './assets/img/rooms/6-lg.png';
import Room7Img from './assets/img/rooms/7.png';
import Room7ImgLg from './assets/img/rooms/7-lg.png';
import Room8Img from './assets/img/rooms/8.png';
import Room8ImgLg from './assets/img/rooms/8-lg.png';
import Room9Img from './assets/img/rooms/9.png';
import Room9ImgLg from './assets/img/rooms/9-lg.png';
// import icons
import {
  FaWifi,
  FaCoffee,
  FaBath,
  FaParking,
  
  FaHotdog,
  
  FaCocktail,
} from 'react-icons/fa';

export const roomData = [
  {
    id: 1,
    name: 'Superior Room',
    description:
      'Indulge in the refined elegance of our Superior Room , offering 400 square feet of meticulously designed space. Featuring a king-sized bed, a comfortable seating area, and modern amenities like free Wi-Fi and a flat-screen TV, this room ensures a relaxing and enjoyable stay.',
    facilities: [
      { name: 'Wifi', icon: <FaWifi /> },
      { name: 'Coffee', icon: <FaCoffee /> },
      { name: 'Bath', icon: <FaBath /> },
      { name: 'Parking Space', icon: <FaParking /> },
      
     { name: 'Breakfast', icon: <FaHotdog /> },
     
      { name: 'Drinks', icon: <FaCocktail /> },
    ],
    size: 180,
    maxPerson: 1,
    price: 1680,
    image: Room1Img,
    imageLg: Room1ImgLg,
  },
  {
    id: 2,
    name: 'Superior Room',
    description:
      'Indulge in the refined elegance of our Superior Room, offering 400 square feet of meticulously designed space. Featuring a king-sized bed, a comfortable seating area, and modern amenities like free Wi-Fi and a flat-screen TV, this room ensures a relaxing and enjoyable stay.',
    facilities: [
      { name: 'Wifi', icon: <FaWifi /> },
      { name: 'Coffee', icon: <FaCoffee /> },
      { name: 'Bath', icon: <FaBath /> },
      { name: 'Parking Space', icon: <FaParking /> },
      
      { name: 'Breakfast', icon: <FaHotdog /> },
      
      { name: 'Drinks', icon: <FaCocktail /> },
    ],
    size: 180,
    maxPerson: 2,
    price:2220,
    image: Room2Img,
    imageLg: Room2ImgLg,
  },
  {
    id: 3,
    name: 'Superior Room',
    description:
      'Indulge in the refined elegance of our Superior Room, offering 400 square feet of meticulously designed space. Featuring a king-sized bed, a comfortable seating area, and modern amenities like free Wi-Fi and a flat-screen TV, this room ensures a relaxing and enjoyable stay.',
    facilities: [
      { name: 'Wifi', icon: <FaWifi /> },
      { name: 'Coffee', icon: <FaCoffee /> },
      { name: 'Bath', icon: <FaBath /> },
      { name: 'Parking Space', icon: <FaParking /> },
     
      { name: 'Breakfast', icon: <FaHotdog /> },
      
      { name: 'Drinks', icon: <FaCocktail /> },
    ],
    size: 180,
    maxPerson: 3,
    price: 2865,
    image: Room3Img,
    imageLg: Room3ImgLg,
  },
  {
    id: 4,
    name: 'Queens Room',
    description:
      'Experience comfort in our Queen Room, featuring 400 square feet of well-appointed space. Enjoy a restful night on a plush queen-sized bed, stay connected with free Wi-Fi, and unwind with a flat-screen TV. The room also includes a cozy seating area and a modern ensuite bathroom, perfect for both relaxation and productivity.',
    facilities: [
      { name: 'Wifi', icon: <FaWifi /> },
      { name: 'Coffee', icon: <FaCoffee /> },
      { name: 'Bath', icon: <FaBath /> },
      { name: 'Parking Space', icon: <FaParking /> },
      
      { name: 'Breakfast', icon: <FaHotdog /> },
      
      { name: 'Drinks', icon: <FaCocktail /> },
    ],
    size: 200,
    maxPerson: 4,
    price: 2000,
    image: Room4Img,
    imageLg: Room4ImgLg,
  },
  {
    id: 5,
    name: 'Queens Room',
    description:
      'Experience comfort in our Queen Room, featuring 300 square feet of well-appointed space. Enjoy a restful night on a plush queen-sized bed, stay connected with free Wi-Fi, and unwind with a flat-screen TV. The room also includes a cozy seating area and a modern ensuite bathroom, perfect for both relaxation and productivity.',
    facilities: [
      { name: 'Wifi', icon: <FaWifi /> },
      { name: 'Coffee', icon: <FaCoffee /> },
      { name: 'Bath', icon: <FaBath /> },
      { name: 'Parking Space', icon: <FaParking /> },

      { name: 'Breakfast', icon: <FaHotdog /> },
      
      { name: 'Drinks', icon: <FaCocktail /> },
    ],
    size: 200,
    maxPerson: 2,
    price: 2320,
    image: Room5Img,
    imageLg: Room5ImgLg,
  },
  {
    id: 6,
    name: 'Queens Room',
    description:
      'Experience comfort in our Queen Room, featuring 300 square feet of well-appointed space. Enjoy a restful night on a plush queen-sized bed, stay connected with free Wi-Fi, and unwind with a flat-screen TV. The room also includes a cozy seating area and a modern ensuite bathroom, perfect for both relaxation and productivity.',
    facilities: [
      { name: 'Wifi', icon: <FaWifi /> },
      { name: 'Coffee', icon: <FaCoffee /> },
      { name: 'Bath', icon: <FaBath /> },
      { name: 'Parking Space', icon: <FaParking /> },
     
      { name: 'Breakfast', icon: <FaHotdog /> },
      
      { name: 'Drinks', icon: <FaCocktail /> },
    ],
    size: 200,
    maxPerson: 3,
    price: 3144,
    image: Room6Img,
    imageLg: Room6ImgLg,
  },
  {
    id: 7,
    name: 'Suit Room',
    description:
      'Discover luxury in our Suite Room, offering 500 square feet of elegantly designed space. Featuring a separate living area, a king-sized bed, a kitchenette, free Wi-Fi, and a flat-screen TV, this suite ensures the ultimate in comfort and sophistication.',
    facilities: [
      { name: 'Wifi', icon: <FaWifi /> },
      { name: 'Coffee', icon: <FaCoffee /> },
      { name: 'Bath', icon: <FaBath /> },
      { name: 'Parking Space', icon: <FaParking /> },

      { name: 'Breakfast', icon: <FaHotdog /> },
     
      { name: 'Drinks', icon: <FaCocktail /> },
    ],
    size: 220,
    maxPerson: 1,
    price: 3500,
    image: Room7Img,
    imageLg: Room7ImgLg,
  },
  {
    id: 8,
    name: 'Suit Room',
    description:
      'Discover luxury in our Suite Room, offering 500 square feet of elegantly designed space. Featuring a separate living area, a king-sized bed, a kitchenette, free Wi-Fi, and a flat-screen TV, this suite ensures the ultimate in comfort and sophistication.',
    facilities: [
      { name: 'Wifi', icon: <FaWifi /> },
      { name: 'Coffee', icon: <FaCoffee /> },
      { name: 'Bath', icon: <FaBath /> },
      { name: 'Parking Space', icon: <FaParking /> },

      { name: 'Breakfast', icon: <FaHotdog /> },
     
      { name: 'Drinks', icon: <FaCocktail /> },
    ],
    size: 220,
    maxPerson: 2,
    price: 3700,
    image: Room8Img,
    imageLg: Room8ImgLg,
  },
  {
    id: 9,
    name: 'Suit Room',
    description:
      'Discover luxury in our Suite Room, offering 500 square feet of elegantly designed space. Featuring a separate living area, a king-sized bed, a kitchenette, free Wi-Fi, and a flat-screen TV, this suite ensures the ultimate in comfort and sophistication.',
    facilities: [
      { name: 'Wifi', icon: <FaWifi /> },
      { name: 'Coffee', icon: <FaCoffee /> },
      { name: 'Bath', icon: <FaBath /> },
      { name: 'Parking Space', icon: <FaParking /> },

      { name: 'Breakfast', icon: <FaHotdog /> },
      
      { name: 'Drinks', icon: <FaCocktail /> },
    ],
    size: 220,
    maxPerson: 3,
    price: 4000,
    image: Room9Img,
    imageLg: Room9ImgLg,
  },
];
