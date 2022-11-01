import React from 'react'
import Tarea from '../Tarea/Tarea'

const Lista = () => {
    const tareas=["Aprender HTML","Aprender a hacer el amor","Aprender a besar","Aprender a tocar guitarra"]
  return (
    <div>
        {
            tareas.map((tarea,index)=>(
                <Tarea tarea={tarea}/>
            ))
        }
    </div>
  )
}

export default Lista