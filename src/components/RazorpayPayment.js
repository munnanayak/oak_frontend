import React from 'react';

const RazorpayPayment = ({ orderId, amount }) => {
  const handlePayment = () => {
    const options = {
      key: 'rzp_test_kSxeaCRWjnIZhD', // Replace with your Razorpay Key ID
      amount: amount * 100, // Amount in currency subunits
      currency: 'INR',
      name: 'Hotel Booking',
      description: 'Room booking payment',
      image: 'https://example.com/your_logo',
      order_id: orderId,
      handler: function (response) {
        alert(`Payment ID: ${response.razorpay_payment_id}`);
        alert(`Order ID: ${response.razorpay_order_id}`);
        alert(`Signature: ${response.razorpay_signature}`);
        // Handle successful payment here (e.g., update your backend)
      },
      prefill: {
        name: 'nayak',
        email: 'nayak.doe@example.com',
        contact: '9999999999',
      },
      notes: {
        address: 'Hotel Oak',
      },
      theme: {
        color: '#F37254',
      },
    };

    const rzp1 = new window.Razorpay(options);
    rzp1.open();
  };

  return <button onClick={handlePayment}>Pay Now</button>;
};

export default RazorpayPayment;
