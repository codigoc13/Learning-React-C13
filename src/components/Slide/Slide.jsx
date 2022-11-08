import React, {useState,useEffect} from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'

const Slideshow = () => {
const [noticias, setNoticias] = useState([])

const fetchNoticias=async()=>{
  const response= await fetch("https://crudcrud.com/api/ef1d13f40e8d46c7a1d1402c3d2ec47a/news")
  const data=await response.json()
  setNoticias(data)
}
useEffect(() => {
  fetchNoticias()
}, [])

    
      return (
        <Slide>
    
          {
            noticias.map((noticia, index) => (
              <div key={index} >
                <div className='each-slide-effect' >
                  <img src={noticia.image} className='image' />
    
                  <a href='#'>Ver más</a>
                </div>
              </div>
            )
            )
          }
        </Slide>
      );
}

export default Slideshow