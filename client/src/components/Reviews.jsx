import axios from 'axios';
import React, {useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
import {useNavigate} from 'react-router-dom';
import { useParams } from 'react-router-dom'



const Reviews = ({oneRestaurant}) => {
    
    const navigate = useNavigate() 
    const {id} = useParams();
    const [reviews, setReviews] = useState([])

    useEffect(() => {
      axios.get(`http://localhost:8000/api/reviews/${id}`)
      .then(res => setReviews(res.data))
      .catch(err => console.log(err))
  }, [])

    console.log("OneRestaurant:", oneRestaurant)
      console.log("reviews:",oneRestaurant.reviews)

      const naviateCreateReview = () => {
        navigate(`/reviews/create/${id}`)
    }

  return (
    <div> 
            { reviews ? reviews.map((review) => {
              return (
                <div>
                  <div>
                      <p>{review.description}</p>
                      <p>{review.rating}</p>
                      <p>{review.user.firstName}</p>
                  </div>
                </div>
              )
              
          }
          ) : null} 
              <button onClick={(e) => naviateCreateReview()}>Add Review</button>
    </div>
  )

}

export default Reviews