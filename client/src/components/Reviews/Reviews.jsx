import { Rating } from '@mui/material';
import axios from 'axios';
import React, {useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
import {useNavigate} from 'react-router-dom';
import { useParams } from 'react-router-dom';




const Reviews = ({oneRestaurant, user}) => {
    
    const navigate = useNavigate() 
    const {id} = useParams();
    const [reviews, setReviews] = useState([])


    console.log("user:",user)

    useEffect(() => {
      axios.get(`http://localhost:8000/api/reviews/${id}`)
      .then(res => {setReviews(res.data); console.log("Res Data:", res.data)})
      .catch(err => console.log(err))
  }, [])

      console.log("OneRestaurant:", oneRestaurant)
      console.log("reviews:",oneRestaurant.reviews)

      const naviateCreateReview = () => {
        if (!user) {
          navigate('/')
        }else {
          navigate(`/reviews/create/${id}`)
  
        }
    }

  return (
    <div>
      <div className='Reviews'> 
            { reviews ? reviews.map((review) => {
              return (
                  <div className='review-single'>
                    <div className='review-user'>
                      <p className='review-user-name'>{review.user?.firstName} </p>
                      <Rating name="read-only" value={review.rating} readOnly />     
                      <p><Link to={`/reviews/edit/${review._id}`}> {(review.user?.firstName === user.firstName) ? "Edit" : ""}</Link></p>   
                      <p> {(review.user?.firstName === user.firstName) ? "Delete" : ""}</p>   
                    </div>
                    <p>{review.description}</p>
                  </div>
              )
              
          }
          ) : null} 
      </div>
      <button className='btn bg-danger text-white' onClick={(e) => naviateCreateReview()}>Add Review</button>
    </div>

  )

}

export default Reviews