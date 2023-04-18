import React from 'react';
import Login from './Login';
import Register from './Register';
import '/Users/eleanaortega/Desktop/Mern/Good Eats/client/src/components.css';
import { useState } from 'react';

const RegLogForm = ({setUser}) => {
  

  return (
    <div className='log-reg-container'>
      <h1 className='title-log'>Good Eats</h1>
      <div className='log-reg'>
          <Register setUser={setUser}/>
          <Login setUser={setUser}/>
      </div>
    </div>
  )
}

export default RegLogForm