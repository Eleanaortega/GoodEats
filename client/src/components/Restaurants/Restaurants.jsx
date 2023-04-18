import axios from 'axios';
import React, {useEffect, useState} from 'react';
import {useNavigate} from 'react-router-dom';
// import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom'
import '/Users/eleanaortega/Desktop/Mern/Good Eats/client/src/components.css';


const Restaurants = ({user,setUser}) => {
    const [restaurants, setRestaurants] = useState([])
    const [searchQuery, setSearchQuery] = useState('');

    const navigate = useNavigate() 
    
    console.log("user:",user)

    useEffect(() => {
        axios.get('http://localhost:8000/api/restaurants')
        .then(res => setRestaurants(res.data.Restaurants))
        .catch(err => console.log(err))
      }, [])
    

      const logHanlder = (e) => {
        navigate('/')
    }

    const handleLogout = (e) => {
      e.preventDefault();
      console.log("attempting to logout");
      axios
          .post('http://localhost:8000/api/users/logout', { } , { withCredentials: true })
          .then(res => {
              navigate('/restaurants')
              setUser(null);
              console.log("successful logout")
          })
          .catch(err => console.log("logout error: " + err));}
    
    const navigateOneRestaurant = (id) => {
      navigate(`/restaurants/${id}`)
    }

    const navigateCreateRestaurant = (e) => {
      if (user?.firstName) {
        navigate('/restaurants/create')
      }else {
        navigate('/')
      }
    }
    
  

  return (
    <div>
      <nav className="navbar navbar-main navbar-expand-lg bg-body-tertiary justify-content-evenly ">
        <h1 className='title'>Good Eats</h1>
        <form class="d-flex" role="search">
          <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}/>
          <button class="btn btn-danger" type="submit" >Search</button>
        </form>
        <button class="btn btn-primary" type="submit" onClick={(user?.firstName) ? handleLogout : logHanlder }>  {(user?.firstName) ? "Logout" : "Login"}</button>
      </nav>
      <div className='add-res'>
        <h1 className='text-center p-4'>Recent Activity</h1>
        <button className=' btn add-res-btn bg-danger' type='submit' onClick={navigateCreateRestaurant}>+</button>
      </div>
      <div className=' mx-auto p-5 row row-cols-1 row-cols-md-5 g-4 '> 
      {restaurants
        .filter((restaurant) =>
          restaurant.title.toLowerCase().includes(searchQuery.toLowerCase())
          )
            .map((restaurant) => {
              return (
                <div className='col'>
                  <div class="card bg-dark text-white" style={{width: 15 + 'rem', height: 20 + 'rem', transition: 'transform 0.3s'}}  onClick={(e) => navigateOneRestaurant(restaurant._id)}>
                    <img src={restaurant.img} alt="" className="card-img-top " width="150" height='150' />
                    <div key={restaurant._id} className="card-body">
                      <h2 className='card-title d-flex justify-content-center'>{restaurant.title}</h2>
                      <p className='card-text d-flex justify-content-center'>{restaurant.type }</p>
                      <p className='card-text d-flex justify-content-center'>{restaurant.price}</p>
                    </div>
                  </div>
                </div>
              )}
            )}  
      </div>
    </div>
  )
}

export default Restaurants