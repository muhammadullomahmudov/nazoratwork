import React from 'react';
import { Link } from 'react-router-dom';
const RestaurantCard = ({ restaurant }) => {
  return (
    <div className="bg-white shadow rounded-lg overflow-hidden w-full max-w-sm mx-auto">
      <img
        src={restaurant.image}
        alt={restaurant.name}
        className="w-full h-40 object-cover"
      />
      <div className="p-4">
        <h3 className="font-bold text-lg text-gray-900 mb-2">{restaurant.name}</h3>
        <p className="text-gray-700 text-sm">{restaurant.address}</p>
        <p className="text-gray-500 text-sm">{restaurant.hours}</p>
        <div className="mt-4 flex justify-between items-center">
          <button
           
            className="bg-orange-500 text-white text-sm py-2 px-4 rounded "
          >
           9:30
          </button>
          <button
            
            className="bg-gray-300 text-white text-sm py-2 px-4 rounded "
          >
           10:15
          </button>
          <Link
            to={`/restaurant/${restaurant.id}`}
            className="bg-gray-500 text-white text-sm py-2 px-4 rounded "
          >
            More
          </Link>
        </div>
      </div>
    </div>
  );
};

export default RestaurantCard;