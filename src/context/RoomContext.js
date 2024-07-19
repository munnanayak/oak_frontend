import React, { createContext, useEffect, useState } from 'react';
// data
import { roomData } from '../data';
// create context
export const RoomContext = createContext();

const RoomProvider = ({ children }) => {
  const [rooms, setRooms] = useState(roomData);
  const [adults, setAdults] = useState('1 Adult');
  const [kids, setKids] = useState('0 Kids');
  const [total, setTotal] = useState(0);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // Parse the number of adults and kids from the state variables
    const numberOfAdults = parseInt(adults.split(' ')[0], 10);
    const numberOfKids = parseInt(kids.split(' ')[0], 10);
    setTotal(numberOfAdults + numberOfKids);
  }, [adults, kids]); // Add dependency array

  const handleClick = (e) => {
    e.preventDefault();
    setLoading(true);
    // filter rooms based on total (person)
    const newRooms = roomData.filter((room) => {
      return total <= room.maxPerson;
    });
    setTimeout(() => {
      setRooms(newRooms);
      setLoading(false);
    }, 3000);
  };

  return (
    <RoomContext.Provider
      value={{ rooms, adults, setAdults, kids, setKids, handleClick, loading }}
    >
      {children}
    </RoomContext.Provider>
  );
};

export default RoomProvider;
