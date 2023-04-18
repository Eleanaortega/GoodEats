import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const RegisterForm = ({setUser}) => {

    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")

    
    const navigate = useNavigate();

    // const changeHandler = (e) => {
    //     setUserInfo({
    //         ...userInfo,
    //         [e.target.name]: e.target.value
    //     })
    // }
    
    const submitHandler = (e) => {
        e.preventDefault();
        axios.post('http://localhost:8000/api/users/register',  {
            firstName, lastName, email, password, confirmPassword
        }, {withCredentials: true})
            .then( res => {
                console.log("logged user" + res.data.user)
                setUser(res.data.user)
                navigate('/restaurants')
            })
            .catch(err => console.log(err))
    }

  return (
    <div className="col-md-4 mx-auto register">
        <form className='m-5' onSubmit={submitHandler}>
            <h3 className="text-center text-white">Register</h3>
            <div className="form-group p-1">
                <label className="form-label text-white">First Name:</label>
                <input type="text" className="form-control" name="firstName" onChange={e=>setFirstName(e.target.value)}/>
            </div>
            <div className="form-group p-1">
                <label className="form-label text-white">Last Name:</label>
                <input type="text" className="form-control" name="lastName" onChange={e=>setLastName(e.target.value)}/>
            </div>
            <div className="form-group p-1">
                <label className="form-label text-white">Email:</label>
                <input type="email" className="form-control" name="email" onChange={e=>setEmail(e.target.value)}/>
            </div>
            <div className="form-group p-1">
                <label className="form-label text-white">Password:</label>
                <input type="password" className="form-control" name="password" onChange={e=>setPassword(e.target.value)}/>
            </div>
            <div className="form-group p-1">
                <label className="form-label text-white">Confirm Password:</label>
                <input type="password" className="form-control" name="confirmPassword" onChange={e=>setConfirmPassword(e.target.value)}/>
            </div>
            <div className="form-group p-1">
                <button type="submit" className="btn btn-primary mt-3">Register</button>
            </div>
        </form>
    </div>
  )
}

export default RegisterForm