import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
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
        <Link key={newInfo._id} className='new-item' to={`/News/${newInfo._id}`}>
          
          <img className="image-new" src={newInfo.image} />
          <span>{newInfo.title}</span>
        </Link>
      ))}
    </div>
  );
};

export default News;
