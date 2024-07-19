import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
// components
import AdultsDropdown from '../components/AdultsDropdown';
import KidsDropdown from '../components/KidsDropdown';
import CheckIn from '../components/CheckIn';
import CheckOut from '../components/CheckOut';
// scroll top component
import ScrollToTop from '../components/ScrollToTop';
// context
import { RoomContext } from '../context/RoomContext';
// icons
import { FaCheck } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const RoomDetails = () => {
  const { rooms } = useContext(RoomContext);
  const { id } = useParams();
  const navigate = useNavigate();
  // get room
  const room = rooms.find((room) => {
    return room.id === Number(id);
  });
  const handleNavigation=(path)=>{
    navigate(path);
  };

  // destructure room
  const { name, description, facilities, imageLg, price } = room;

  return (
    <section>
      <ScrollToTop />
      {/* banner */}
      <div className='bg-room bg-cover bg-center h-[560px] relative flex justify-center items-center'>
        {/* overlay */}
        <div className='absolute w-full h-full bg-black/70'></div>
        {/* title */}
        <h1 className='text-6xl text-white z-20 font-primary text-center'>
          {name} Details
        </h1>
      </div>
      <div className='container mx-auto'>
        <div className='flex flex-col lg:flex-row h-full py-24'>
          {/* left */}
          <div className='w-full h-full lg:w-[60%] px-6'>
            <h2 className='h2'>{name}</h2>
            <p className='mb-8'>{description}</p>
            <img className='mb-8' src={imageLg} alt='' />
            {/* facilities */}
            <div className='mt-12'>
              <h3 className='h3 mb-3'>Room Facilities</h3>
              <p className='mb-12'>
              <li>Plush beds with high-quality linens for ultimate comfort</li>
              <li>Flat-screen TV with cable channels for entertainment</li>
              <li>Free high-speed Wi-Fi access throughout your stay</li>
              <li>Minibar or coffee/tea making facilities for refreshments</li>
              <li>Ensuite bathroom with premium toiletries for relaxation</li>
              <li>In-room safe to store valuables securely</li>
              <li>Daily housekeeping for a clean and comfortable environment</li>
              </p>
              {/* grid */}
              <div className='grid grid-cols-3 gap-6 mb-12'>
                {facilities.map((item, index) => {
                  // destructure item
                  const { name, icon } = item;
                  return (
                    <div
                      className='flex items-center gap-x-3 flex-1'
                      key={index}
                    >
                      <div className='text-3xl text-accent'>{icon}</div>
                      <div className='text-base'>{name}</div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
          {/* right */}
          <div className='w-full h-full lg:w-[40%]'>
            {/* reservation */}
            <div className='py-8 px-6 bg-accent/20 mb-12'>
              <div className='flex flex-col space-y-4 mb-4'>
                <h3>Your Reservation</h3>
                <div className='h-[60px]'>
                  <CheckIn />
                </div>
                <div className='h-[60px]'>
                  <CheckOut />
                </div>
                <div className='h-[60px]'>
                  <AdultsDropdown />
                </div>
                <div className='h-[60px]'>
                  <KidsDropdown />
                </div>
              </div>
              <button className='btn btn-lg btn-primary w-full' onClick={()=>handleNavigation("/customerdetails")}>
                book now for ₹{price}
              </button>
            </div>
            {/* rules */}
            <div>
              <h3 className='h3'>Hotel Rules</h3>
              <p className='mb-6'>
              

<li>Quiet hours are observed from 10 PM to 7 AM</li>

<li>Visitors must depart by 10 PM.</li>
<li>Please maintain the room in good condition </li>
<li>Use the in-room safe for storing valuables</li>
<li>Contact the front desk in case of emergencies</li>
              </p>
              <ul className='flex flex-col gap-y-4'>
                <li className='flex items-center gap-x-4'>
                  <FaCheck className='text-accent' />
                  Check-in: 12:00 PM 
                </li>
                <li className='flex items-center gap-x-4'>
                  <FaCheck className='text-accent' />
                  Check-out: 11:00 AM
                </li>
                <li className='flex items-center gap-x-4'>
                  <FaCheck className='text-accent' />
                  No Pets
                </li>
                <li className='flex items-center gap-x-4'>
                  <FaCheck className='text-accent' />
                  No Smoking
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RoomDetails;
