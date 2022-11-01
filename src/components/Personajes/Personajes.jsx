import React, {useEffect,useState} from 'react'

const Personajes = () => {
    const [personajes, setPersonajes] = useState([])
    const fetchPersonaje=async()=>{
        
           
           let response = await fetch("https://rickandmortyapi.com/api/character");
           console.log(response)
           let data = await response.json();
           
          setPersonajes(data.results)

    }
useEffect(() => {
 fetchPersonaje()
}, [])

  return (
    <div>
      {
        personajes.map(personaje=>(
            <div key={personaje.id}>
                <h1>
                    {
                        personaje.name
                    }
                </h1>
                <img src={personaje.image}/>
            </div>
        ))
      }
    </div>
  )
}

export default Personajes