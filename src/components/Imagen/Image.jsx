import React from 'react'
import './Image.css'

const Image = ({url}) => {
  return (
    <div>
        <img className='imagen' src={url} alt="" />
    </div>
  )
}

export default Image