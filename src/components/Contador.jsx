import React, {useState} from 'react'

const Contador = () => {
    const [numero, setNumero] = useState(2)

  return (
    <div>
        <h1>
        {
          numero
        }
      </h1>
      <button onClick={()=>setNumero(numero+2)}>Aumentar</button>
    </div>
  )
}

export default Contador