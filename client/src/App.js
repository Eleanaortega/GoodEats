import {Routes, Route} from 'react-router-dom';
import CreateReview from './components/CreateReview';
import OneRestaurant from './components/OneRestaurant';
import RegLogForm from './components/RegLogForm'
import RestaurantForm from './components/RestaurantForm';
import Restaurants from './components/Restaurants';
import Reviews from './components/Reviews';
// import Login from './components/Login'
import { useState } from 'react';

function App() {

  const [user, setUser] = useState({})

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<RegLogForm setUser={setUser}/>}/>
        {/* <Route path="*" element={<NotFound/>} /> */}
        {/* <Route path="/restaurants" element={<Restaurants user={user}/> } /> */}
        {/* <Route path="/restaurants" element={<Restaurants user={user}/>} /> */}
        <Route path="/restaurants/" element={<Restaurants setUser={setUser} user={user} />} />
        <Route path="/restaurants/:id" element={<OneRestaurant user={user} />} />
        <Route path="/restaurants/create" element={<RestaurantForm  user={user}/>}/>
        <Route path="/reviews/create/:id" element={<CreateReview  user={user}/>} />
     </Routes>
    </div>
  );
}

export default App;