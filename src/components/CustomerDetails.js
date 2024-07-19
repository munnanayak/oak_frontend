import React, { useState } from 'react';
import { Box, Stack, Input, Button, FormControl, FormLabel, Text, Heading } from '@chakra-ui/react';
import axios from 'axios';

const CustomerDetails = () => {
  const [customerDetails, setCustomerDetails] = useState({
    name: '',
    email: '',
    contact: '',
    address: '',
    checkInDate: '',
    checkOutDate: '',
    guests: 1,
    roomType: 'Deluxe Room',
  });
  const [orderId, setOrderId] = useState(null);
  const [amount, setAmount] = useState(0); // Define the amount state
  const [tax, setTax] = useState(0);
  const [totalAmount, setTotalAmount] = useState(0);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCustomerDetails(prevState => ({ ...prevState, [name]: value }));
  };

  const calculateAmounts = (baseAmount) => {
    const taxAmount = baseAmount * 0.1; // 10% tax, modify as needed
    const total = baseAmount + taxAmount;
    setTax(taxAmount);
    setTotalAmount(total);
  };

  const handleSubmit = async () => {
    try {
      // Store customer details in the backend
      await axios.post("http://localhost:4000/api/customerDetails", customerDetails);
      console.log("Customer details submitted successfully.");
    } catch (error) {
      console.error("Error submitting customer details:", error);
    }
  };

  const handleBookNow = async () => {
    try {
      // Fetch Razorpay key from backend
      const { data: { key } } = await axios.get("http://localhost:4000/api/getkey");

      // Create an order with the backend
      const { data: { order } } = await axios.post("http://localhost:4000/api/checkout", {
        // amount: 1000 // Update this value dynamically as needed
      });

      // Update state with order details
      setOrderId(order.id);
      setAmount(order.amount / 100); // Convert from paisa to rupees

      // Calculate amounts
      calculateAmounts(order.amount / 100); // Convert from paisa to rupees

      // Configure Razorpay options
      const options = {
        key,
        amount: order.amount,
        currency: "INR",
        name: "Nayak Vinod",
        description: "Payment for hotel booking",
        image: "https://avatars.githubusercontent.com/u/25058652?v=4",
        order_id: order.id,
        callback_url: "http://localhost:4000/api/paymentverification",
        prefill: {
          name: customerDetails.name,
          email: customerDetails.email,
          contact: customerDetails.contact
        },
        notes: {
          address: customerDetails.address
        },
        theme: {
          color: "#121212"
        }
      };

      // Initialize Razorpay instance and open payment modal
      const razorpay = new window.Razorpay(options);
      razorpay.open();
    } catch (error) {
      console.error("Error initiating payment:", error);
    }
  };

  return (
    <Stack direction={['column', 'row']} spacing={6} p={6} className="min-h-screen bg-gray-100 flex items-center justify-center">
      <Box flex="1" p={8} borderWidth={1} borderRadius="md" boxShadow="md" className="bg-white shadow-md rounded-lg">
        <Heading as="h1" size="lg" mb={6} textAlign="center" color="teal.500">Customer Details</Heading>
        <FormControl id="name" mb={4}>
          <FormLabel color="teal.700">Name</FormLabel>
          <Input
            type="text"
            name="name"
            value={customerDetails.name}
            onChange={handleInputChange}
            placeholder=""
            borderColor="teal.300"
            focusBorderColor="teal.500"
          />
        </FormControl>
        <FormControl id="email" mb={4}>
          <FormLabel color="teal.700">Email</FormLabel>
          <Input
            type="email"
            name="email"
            value={customerDetails.email}
            onChange={handleInputChange}
            placeholder=""
            borderColor="teal.300"
            focusBorderColor="teal.500"
          />
        </FormControl>
        <FormControl id="contact" mb={4}>
          <FormLabel color="teal.700">Contact Number</FormLabel>
          <Input
            type="tel"
            name="contact"
            value={customerDetails.contact}
            onChange={handleInputChange}
            placeholder=""
            borderColor="teal.300"
            focusBorderColor="teal.500"
          />
        </FormControl>
        <FormControl id="address" mb={4}>
          <FormLabel color="teal.700">Address</FormLabel>
          <Input
            type="text"
            name="address"
            value={customerDetails.address}
            onChange={handleInputChange}
            placeholder=""
            borderColor="teal.300"
            focusBorderColor="teal.500"
          />
        </FormControl>
        <Button colorScheme="teal" onClick={handleSubmit} w="full" mt={4}>
          Submit
        </Button>
      </Box>

      <Box flex="1" p={8} borderWidth={1} borderRadius="md" boxShadow="md" className="bg-white shadow-md rounded-lg">
        <Text fontSize="xl" mb={4} color="teal.700">Payment Summary</Text>
        <Text mb={2}><strong>Order ID:</strong> {orderId}</Text> {/* Display the order ID */}
        <Text mb={2}><strong>Amount:</strong> ₹{amount}</Text> {/* Display the amount */}
        <Text mb={2}><strong>Check-in Date:</strong> {customerDetails.checkInDate}</Text>
        <Text mb={2}><strong>Check-out Date:</strong> {customerDetails.checkOutDate}</Text>
        <Text mb={2}><strong>Guests:</strong> {customerDetails.guests}</Text>
        <Text mb={2}><strong>Room Type:</strong> {customerDetails.roomType}</Text>
        <Text mb={2}><strong>Tax:</strong> ₹{tax}</Text> {/* Display tax */}
        <Text mb={2}><strong>Total Amount:</strong> ₹{totalAmount}</Text> {/* Display total amount */}
        <Button colorScheme="teal" w="full" mt={4} onClick={handleBookNow}>
          Book Now
        </Button>
      </Box>
    </Stack>
  );
};

export default CustomerDetails;
