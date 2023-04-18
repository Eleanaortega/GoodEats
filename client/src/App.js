import {Routes, Route} from 'react-router-dom';
import CreateReview from './components/Reviews/CreateReview'
import OneRestaurant from './components/Reviews/OneRestaurant';
import RegLogForm from './components/LogReg/RegLogForm'
import RestaurantForm from './components/Restaurants/RestaurantForm';
import Restaurants from './components/Restaurants/Restaurants';
import EditReview from './components/Reviews/EditReview'
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
        <Route path="/reviews/edit/:id" element={<EditReview  user={user}/>} />
     </Routes>
    </div>
  );
}

export default App;