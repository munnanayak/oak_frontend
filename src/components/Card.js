import React from 'react';
import { VStack, Image, Text, Button } from '@chakra-ui/react';

const Card = ({ room, checkoutHandler }) => {
  const { id, name, imageLg, price } = room;

  return (
    <VStack spacing={4} borderWidth="1px" borderRadius="lg" overflow="hidden" p={4}>
      <Image src={imageLg} boxSize="200px" objectFit="cover" alt={`${name} Image`} />
      <Text fontSize="xl">{name}</Text>
      <Text fontSize="lg">₹{price}</Text>
      <Button colorScheme="blue" onClick={() => checkoutHandler(id, price)}>Book Now</Button>
    </VStack>
  );
};

export default Card;
