import React from 'react';
import Login from './Login';
import Register from './Register';
import '../components.css'

const RegLogForm = () => {
  

  return (
    <div className='log-reg-container'>
      <h1 className='title-log'>Good Eats</h1>
      <div className='log-reg'>
          <Register/>
          <Login/>
      </div>
    </div>
  )
}

export default RegLogForm