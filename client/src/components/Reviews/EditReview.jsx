import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useParams } from 'react-router-dom'
import {Stack, Rating} from "@mui/material"


const CreateReview = () => {

    const navigate = useNavigate();
    
    const {id} = useParams();

    const [oneReview, setOneReview] = useState({})

    useEffect(() => {
        axios.get(`http://localhost:8000/api/review/${id}`, {withCredentials: true} )
        .then( res => setOneReview(res.data))
        .catch(err => console.log(err))
    }, [])

    const changeHandler = (e) => {
        setOneReview({
            ...oneReview,
            [e.target.name]: e.target.value
        })
    }

    const submitHandler = (e) => {
        e.preventDefault();
        axios.put(`http://localhost:8000/api/reviews/${id}`, oneReview, {withCredentials: true})
            .then(res => {
                console.log("updated review:", res)
                navigate(`/restaurants/${oneReview.restaurant}`)
            })
            .catch(err => console.log(err))
    }

    

  return (
    <div className='review-background'>
        <div className=" mx-auto review-create">
            <form className='review-form' onSubmit={submitHandler}>
                <h3 className="text-center">EDIT REVIEW</h3>
                <div className="form-group">
                    <textarea rows="4" cols="50" maxlength="200" className="form-control" name="description" value={oneReview.description}
                    onChange={changeHandler}/>
                </div>
                <Stack spacing={2}>
                    <Rating value={oneReview.rating} name="rating" onChange={changeHandler} size="large"/>
                    <button type="submit" className="btn btn-primary mt-3">Add</button>
                </Stack>
            </form>
        </div>
    </div>
  )
}

export default CreateReview