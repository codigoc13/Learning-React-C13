import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { getANewById } from '../../../actions/action'

const NewDetail = () => {
    const {id}=useParams()
    const [newData, setNewData] = useState({})
 useEffect(() => {
  (async ()=>{
    const result=await getANewById("news",id)
    setNewData(result.data)       
})()
 }, [])
 
  return (
    <div key={id}>
        <h1>
            {newData.title}
        </h1>
        <img src={newData.image} />
    </div>
  )
}

export default NewDetail