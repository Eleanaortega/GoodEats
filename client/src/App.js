import {Routes, Route} from 'react-router-dom';
import CreateReview from './components/CreateReview';
import OneRestaurant from './components/OneRestaurant';
import RegLogForm from './components/RegLogForm'
import RestaurantForm from './components/RestaurantForm';
import Restaurants from './components/Restaurants';
import Reviews from './components/Reviews';
// import Login from './components/Login'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<RegLogForm/>} />
        {/* <Route path="*" element={<NotFound/>} /> */}
        <Route path="/restaurants" element={<Restaurants/>} />
        <Route path="/restaurants" element={<Restaurants/>} />
        <Route path="/restaurants/:id" element={<OneRestaurant/>} />
        <Route path="/restaurants/create" element={<RestaurantForm/>} />
        <Route path="/reviews/create/:id" element={<CreateReview/>} />
     </Routes>
    </div>
  );
}

export default App;
