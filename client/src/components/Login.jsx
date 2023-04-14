import React from 'react';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';


const LoginForm = ({setUser}) => {
    
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const navigate = useNavigate();
    

    // const changeHandler = (e) => {
    //     setUserInfo({
    //         ...userInfo,
    //         [e.target.name]: e.target.value
    //     })
    // }
    
    const submitHandler = (e) => {
        e.preventDefault();
        axios.post('http://localhost:8000/api/users/login', { email, password}, {withCredentials: true})
            .then(res => {
                console.log('user', res.data.user);
                setUser(res.data.user)
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
                <input type="email" className="form-control" name="email" onChange={ e => setEmail(e.target.value)}/>
            </div>
            <div className="form-group p-1">
                <label className="form-label text-white">Password:</label>
                <input type="password" className="form-control" name="password"  onChange={ e => setPassword(e.target.value) }/>
            </div>
            <div className="form-group p-1">
                <button type="submit" className="btn btn-primary mt-3">Login</button>
            </div>
        </form>
    </div>
  )
}

export default LoginForm