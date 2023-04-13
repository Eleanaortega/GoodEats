import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useParams } from 'react-router-dom'


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
                console.log(res)
                navigate('/restaurants')
            })
            .catch(err => console.log(err))
    }

  return (
    <div className="col-md-4 mx-auto">
        <form onSubmit={submitHandler}>
            <h3 className="text-center">New Review</h3>
            <div className="form-group">
                <textarea rows="4" cols="50" maxlength="200" className="form-control" name="description" value={review.description}  placeholder={"Share your experience!"}
                onChange={changeHandler}/>
            </div>
            <div className="form-group">
                <label className="form-label">Rating:</label>
                <input type="number" className="form-control" name="rating" value={review.rating} onChange={changeHandler} placeholder={"Out of 5"} />
            </div>
            <button type="submit" className="btn btn-primary mt-3">Register</button>
        </form>
    </div>
  )
}

export default CreateReview