import React from 'react';
import { Link } from 'react-router-dom';
const RestaurantDetails = ({ restaurant }) => {
  return (
    <div className="p-6 max-w-3xl mx-auto">
      <Link to="/">Go back</Link>
      <img
        src={restaurant.image}
        alt={restaurant.name}
        className="w-full h-60 object-cover rounded-lg mb-4"
      />
      <h1 className="text-2xl font-bold text-gray-900 mb-4">{restaurant.name}</h1>
      <p className="text-gray-700 mb-2">{restaurant.address}</p>
      <p className="text-gray-500 mb-2">{restaurant.hours}</p>
      <p className="text-gray-600">{restaurant.description}</p>
    </div>
  );
};
export default RestaurantDetails;