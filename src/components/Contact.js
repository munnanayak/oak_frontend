import React from 'react';
import Header from './Header';
import mapImage from '../assets/img/map-contact.png'; // Import your map image

const ContactPage = () => {
  const openMapInNewWindow = () => {
    window.open('https://www.google.com/maps/place/Hotel+oak+by+signature+airport+zone+hyderabad/@17.2605153,78.3891226,17z/data=!3m1!4b1!4m9!3m8!1s0x3bcbbdc2dc0e8837:0xc4b1d21f0157408!5m2!4m1!1i2!8m2!3d17.2605153!4d78.3916975!16s%2Fg%2F11rfc82rcm?entry=ttu', '_blank');
  };

  return (
    <div style={{ backgroundColor: 'rgb(101, 89, 88)', minHeight: '100vh' }}>
      <Header />

      <div className="container mx-auto py-8 px-4 pt-32">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h1 className="text-left text-3xl font-bold mb-4 text-white">Contact Us</h1>
            <p className="mb-6 text-white text-sm">We'd love to hear from you! Please fill out the form below to get in touch with us.</p>
            
            <div className="mb-6">
              <label className="block text-white font-bold mb-1 text-sm">Your Full Name</label>
              <input 
                type="text" 
                className="w-full p-2 border-b-2 border-white bg-transparent text-white focus:outline-none text-sm"
              />
            </div>
            
            <div className="mb-6">
              <label className="block text-white font-bold mb-1 text-sm">Email Address</label>
              <input 
                type="email" 
                className="w-full p-2 border-b-2 border-white bg-transparent text-white focus:outline-none text-sm"
              />
            </div>

            <div className="mb-6">
              <label className="block text-white font-bold mb-1 text-sm">Contact Number</label>
              <input 
                type="tel" 
                className="w-full p-2 border-b-2 border-white bg-transparent text-white focus:outline-none text-sm"
              />
            </div>

            <div className="mb-6">
              <label className="block text-white font-bold mb-1 text-sm">Message</label>
              <textarea 
                className="w-full p-1 border-b-2 border-white bg-transparent text-white focus:outline-none text-sm" 
                rows="1"
              ></textarea>
            </div>

            <button 
              className="bg-yellow-500 text-white py-2 px-4 rounded hover:bg-yellow-700 text-sm"
            >
              Send Now
            </button>
          </div>

          <div className="w-full flex items-start justify-center md:justify-end pt-16 md:pt-0">
            <a 
              href="https://www.google.com/maps/place/Hotel+oak+by+signature+airport+zone+hyderabad/@17.2605153,78.3891226,17z/data=!3m1!4b1!4m9!3m8!1s0x3bcbbdc2dc0e8837:0xc4b1d21f0157408!5m2!4m1!1i2!8m2!3d17.2605153!4d78.3916975!16s%2Fg%2F11rfc82rcm?entry=ttu" 
              target="_blank" 
              rel="noopener noreferrer"
              onClick={openMapInNewWindow}
            >
              <img 
                src={mapImage} 
                alt="Map of Hotel Oak by Signature Airport Zone Hyderabad" 
                className="w-full h-auto max-h-full cursor-pointer md:ml-8 p-8"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
