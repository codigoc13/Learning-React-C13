import React from 'react'
import './Clock.css'

const Clock = () => {
    
  return (
    <div className='caja'>
        <h1>Hello, World</h1>
        <h2>It's Time 
            {
                new Date().toLocaleTimeString()
            }
        </h2>
    </div>
  )
}


export default Clock