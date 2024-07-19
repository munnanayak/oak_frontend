import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { FaStar } from 'react-icons/fa';

const HomeReview = () => {
  const [reviews, setReviews] = useState([]);
  const [reviewText, setReviewText] = useState('');
  const [reviewRating, setReviewRating] = useState(0);
  const [selectedImage, setSelectedImage] = useState(null);
  const [uploadedImages, setUploadedImages] = useState([]);
  const [ownerResponse, setOwnerResponse] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const reviewsResponse = await axios.get('/api/reviews');
        const imagesResponse = await axios.get('/api/images');
        setReviews(reviewsResponse.data);
        setUploadedImages(imagesResponse.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
      setLoading(false);
    };

    fetchData();
  }, []);

  const handleReviewSubmit = async (e) => {
    e.preventDefault();
    const newReview = { text: reviewText, rating: reviewRating };
    try {
      const response = await axios.post('/api/reviews', newReview);
      console.log('Review submitted:', response.data);
      setReviews([...reviews, response.data]);
      setReviewText('');
      setReviewRating(0);
    } catch (error) {
      console.error('Error submitting review:', error);
    }
  };

  const handleImageUpload = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('image', selectedImage);

    try {
      const response = await axios.post('/api/images', formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });
      console.log('Image uploaded:', response.data);
      setUploadedImages([...uploadedImages, response.data]);
      setSelectedImage(null);
    } catch (error) {
      console.error('Error uploading image:', error);
    }
  };

  const handleOwnerResponse = async (reviewId) => {
    const updatedReviews = reviews.map((review) =>
      review.id === reviewId ? { ...review, ownerResponse } : review
    );
    setReviews(updatedReviews);
    setOwnerResponse('');
  };

  return (
    <div className="container mx-auto py-12 px-4 flex flex-wrap lg:flex-nowrap">
      {/* Left Side: Form for submitting reviews and uploading photos */}
      <div className="w-full lg:w-1/2 lg:pr-8 mb-8 lg:mb-0">
        <form onSubmit={handleReviewSubmit} className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Submit a Review</h2>
          <div className="mb-4">
            <textarea
              className="w-full h-32 p-4 border border-gray-300 rounded-md"
              placeholder="Write your review..."
              value={reviewText}
              onChange={(e) => setReviewText(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <label className="block mb-2">Rating:</label>
            <div className="flex space-x-2">
              {[1, 2, 3, 4, 5].map((star) => (
                <FaStar
                  key={star}
                  className={`cursor-pointer ${reviewRating >= star ? 'text-yellow-500' : 'text-gray-400'}`}
                  onClick={() => setReviewRating(star)}
                />
              ))}
            </div>
          </div>
          <button
            type="submit"
            className="w-full py-2 bg-primary text-white font-bold rounded-md hover:bg-primary-dark transition duration-300"
          >
            Submit Review
          </button>
        </form>

        <form onSubmit={handleImageUpload}>
          <h2 className="text-2xl font-bold mb-4">Upload Hotel Photos</h2>
          <div className="mb-4">
            <label className="block mb-2">Select Image:</label>
            <input
              type="file"
              accept="image/*"
              onChange={(e) => setSelectedImage(e.target.files[0])}
              required
              className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-primary file:text-white hover:file:bg-primary-dark"
            />
          </div>
          <button
            type="submit"
            className="w-full py-2 bg-primary text-white font-bold rounded-md hover:bg-primary-dark transition duration-300"
          >
            Upload Photo
          </button>
        </form>
      </div>

      {/* Right Side: Display reviews and photos */}
      <div className="w-full lg:w-1/2 lg:pl-8">
        <h2 className="text-2xl font-bold mb-4">Customer Reviews</h2>
        {loading ? (
          <div className="text-center">Loading...</div>
        ) : (
          reviews.map((review, index) => (
            <div key={index} className="mb-8 p-4 border rounded-md shadow-md">
              <div className="flex items-center mb-2">
                <h3 className="text-lg font-semibold mr-2">{review.name || 'Anonymous'}</h3>
                <div className="flex">
                  {Array(review.rating)
                    .fill(0)
                    .map((_, i) => (
                      <FaStar key={i} className="text-yellow-500" />
                    ))}
                </div>
              </div>
              <p className="mb-2">{review.text}</p>
              {review.ownerResponse && (
                <p className="mt-4 p-2 bg-gray-100 border rounded-md">
                  <strong>Owner's Response:</strong> {review.ownerResponse}
                </p>
              )}
              <div className="mt-4">
                <input
                  type="text"
                  className="w-full p-2 border border-gray-300 rounded-md mb-2"
                  placeholder="Owner's response..."
                  value={ownerResponse}
                  onChange={(e) => setOwnerResponse(e.target.value)}
                />
                <button
                  onClick={() => handleOwnerResponse(review.id)}
                  className="w-full py-2 bg-primary text-white font-bold rounded-md hover:bg-primary-dark transition duration-300"
                >
                  Respond
                </button>
              </div>
            </div>
          ))
        )}

        <h2 className="text-2xl font-bold mt-12 mb-4">Hotel Photos</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {uploadedImages.map((image, index) => (
            <div key={index} className="relative">
              <img
                src={image.url}
                alt={`Hotel ${index}`}
                className="w-full h-48 object-cover rounded-md shadow-md"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomeReview;
