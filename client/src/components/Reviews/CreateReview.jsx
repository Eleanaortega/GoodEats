import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useParams } from 'react-router-dom'
import {Stack, Rating} from "@mui/material"


const CreateReview = () => {
    const navigate = useNavigate();
    
    const {id} = useParams();

    const [review, setReview] = useState({
        description: "",
        rating: "",
        restaurant: id,
        user: id
    })

    const changeHandler = (e) => {
        setReview({
            ...review,
            [e.target.name]: e.target.value
        })
    }

    const submitHandler = (e) => {
        e.preventDefault();
        axios.post(`http://localhost:8000/api/reviews/${id}`, review, {withCredentials: true})
            .then(res => {
                console.log("new review:", res)
                navigate(`/restaurants/${id}`)
            })
            .catch(err => console.log(err))
    }

    

  return (
    <div className='review-background'>
        <div className=" mx-auto review-create">
            <form className='review-form' onSubmit={submitHandler}>
                <h3 className="text-center">NEW REVIEW</h3>
                <div className="form-group">
                    <textarea rows="4" cols="50" maxlength="200" className="form-control" name="description" value={review.description}  placeholder={"Share your experience!"}
                    onChange={changeHandler}/>
                </div>
                <Stack spacing={2}>
                    <Rating value={review.rating} name="rating" onChange={changeHandler} size="large"/>
                    <button type="submit" className="btn btn-primary mt-3">Add</button>
                </Stack>
            </form>
        </div>
    </div>
  )
}

export default CreateReview