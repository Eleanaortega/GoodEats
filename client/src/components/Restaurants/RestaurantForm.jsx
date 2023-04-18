import React from 'react'
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import { useState } from "react";

const RestaurantForm = () => {

    const [restaurant, setRestaurant] = useState({
            title: "",
            address: "",
            type: "",
            price: "",
            img: ""
        })
        const navigate = useNavigate();

        const onChangeHandler = (e) => {
            setRestaurant({
                ...restaurant, [e.target.name]: e.target.value
            })
        }
    const submitHandler = (e) => {
        e.preventDefault()
            axios.post('http://localhost:8000/api/restaurants', restaurant, {withCredentials: true})
            .then(res => {console.log(res)
                navigate('/restaurants')})
            .catch(err => console.log(err))
        
    } 

  return (
        <div className='res-create-page'>
            <h2 >ADD NEW RESTAURANT</h2>
            <form  className="res-form" onSubmit={submitHandler}>
                <div className='form-group'>
                    <label htmlFor='title'>Title:</label>
                    <input type='text' className='form-control' name='title' onChange={onChangeHandler}/>
                </div>
                <div className='form-group'>
                    <label htmlFor='address'>Address:</label>
                    <input type='text' className='form-control' name='address' onChange={onChangeHandler}/>
                </div>
                <div className='form-group'>
                    <label htmlFor='type'>Type:</label>
                    <input type='text' className='form-control' name='type' placeholder='Ex: Italian' onChange={onChangeHandler}/>
                </div>
                <div className='form-group'>
                    <label htmlFor='price'>Price:</label>
                    <div class="form-check">
                        <input class="form-check-input" type="radio" name="price" id="$" value={"$"}onChange={onChangeHandler}/>
                        <label class="form-check-label" for="$">
                            $
                        </label>
                    </div>
                    <div class="form-check">
                        <input class="form-check-input" type="radio" name="price" id="$$" value={"$$"} onChange={onChangeHandler}/>
                        <label class="form-check-label" for="$$">
                            $$
                        </label>
                    </div>
                    <div class="form-check">
                        <input class="form-check-input" type="radio" name="price" id="$$$" value={"$$$"} onChange={onChangeHandler}/>
                        <label class="form-check-label" for="$$$">
                            $$$
                        </label>
                    </div>
                </div>
                <div className='form-group'>
                    <label htmlFor='img'>Image URL:</label>
                    <input type='text' className='form-control' name='img' onChange={onChangeHandler}/>
                </div>
                <button className='btn btn-primary'>Add Restaurant</button>
            </form>
        </div>
  )
}

export default RestaurantForm