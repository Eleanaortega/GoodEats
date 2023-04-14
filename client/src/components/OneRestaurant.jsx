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

    

  return (
    <div>
        <div>
            <nav class="navbar navbar-expand-lg bg-body-tertiary justify-content-evenly">
                <h1>Good Eats</h1>
            <button class="btn btn-primary" type="submit">Logout</button>
            </nav>
        </div>
        <div className='one-restaurant'>
            <div className='one-restaurant-details'>
                <img src={oneRestaurant.img}  width="400" height='400'/>
                <h2>{oneRestaurant.title}</h2>
                <p>Price:{oneRestaurant.price}</p>
                <p>Address: {oneRestaurant.address}</p>
            </div>
            <Reviews oneRestaurant={oneRestaurant} user={user}/>
        </div>
    </div>
  )
}

export default OneRestaurant