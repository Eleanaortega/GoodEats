import axios from 'axios'
import React, { useState } from 'react'
import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import Reviews from './Reviews'

const OneRestaurant = ({user}) => {

    const {id} = useParams();
    const navigate = useNavigate();
    const [oneRestaurant, setOneRestaurant ] = useState({})

    useEffect(() => {
        axios.get(`http://localhost:8000/api/restaurants/${id}`)
        .then(res => setOneRestaurant(res.data.Restaurant))
        .catch(err => console.log(err))
    }, [])

    const navigateToHome = (e) => {
        navigate('/restaurants')
    }

  return (
    <div>
        <div>
            <nav class="navbar one-res-nav navbar-expand-lg justify-content-evenly">
                <h1>Good Eats</h1>
                <button class="btn btn-primary" type="submit" onClick={navigateToHome}>Home</button>
            </nav>
        </div>
        <div className='one-restaurant'>
            <div className='one-restaurant-details'>
                <img  className='one-res-img' src={oneRestaurant.img}  width="400" height='400'/>
                <div className='one-restaurant-detail-1'>
                    <h2 className='one-res-title'>{oneRestaurant.title}</h2>
                    <p className='one-res-price'>{oneRestaurant.price}</p>
                    <p className='one-res-address'>Address: {oneRestaurant.address}</p>
                </div>
            </div>
            <Reviews oneRestaurant={oneRestaurant} user={user}/>
        </div>
    </div>
  )
}

export default OneRestaurant