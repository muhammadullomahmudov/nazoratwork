import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import RestaurantDetails from './components/RestaurantDetails/restaurantDetails';
import { restaurants } from './restaurantsData';
import './output.css'

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        {restaurants.map((restaurant) => (
          <Route
            key={restaurant.id}
            path={`/restaurant/${restaurant.id}`}
            element={<RestaurantDetails restaurant={restaurant} />}
          />
        ))}
      </Routes>
    </Router>
  );
};

export default App;

