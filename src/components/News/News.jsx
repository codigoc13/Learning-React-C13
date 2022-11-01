import React, { useEffect, useState } from "react";
import { getAllItems } from "../../actions/action";
import './News.css'

const News = () => {
  const [news, setNews] = useState([]);
 
  const fetchNews=async()=>{
    (async ()=>{
        const result=await getAllItems("news")
        result.statusResponse&& setNews(result.data)
    })()
  }
  useEffect(() => {
    fetchNews()
  }, []);

  return (
    <div className="container-news">
      {news.map((newInfo) => (
        <div key={newInfo._id} className='new-item'>
          
          <img className="image-new" src={newInfo.imageNew} />
          <span>{newInfo.name}</span>
        </div>
      ))}
    </div>
  );
};

export default News;
