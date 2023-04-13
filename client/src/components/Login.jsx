import React from 'react';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';


const LoginForm = () => {
    const navigate = useNavigate();
    const [userInfo, setUserInfo] = useState({
        email: "",
        password: ""
    })

    const changeHandler = (e) => {
        setUserInfo({
            ...userInfo,
            [e.target.name]: e.target.value
        })
    }
    
    const submitHandler = (e) => {
        e.preventDefault();
        axios.post('http://localhost:8000/api/users/login', userInfo, {withCredentials: true})
            .then(res => {
                console.log(res)
                navigate('/restaurants')
            })
            .catch(err => console.log(err))
    }


  return (
    <div className="col-md-4 mx-auto login">
        <form className='m-5' onSubmit={submitHandler}>
            <h3 className="text-center text-white">Login</h3>
            <div className="form-group">
                <label className="form-label text-white">Email:</label>
                <input type="email" className="form-control" name="email" value={userInfo.email} onChange={changeHandler}/>
            </div>
            <div className="form-group p-1">
                <label className="form-label text-white">Password:</label>
                <input type="password" className="form-control" name="password" value={userInfo.password} onChange={changeHandler}/>
            </div>
            <div className="form-group p-1">
                <button type="submit" className="btn btn-primary mt-3">Login</button>
            </div>
        </form>
    </div>
  )
}

export default LoginForm