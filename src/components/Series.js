import React from 'react'
import  { useState,useEffect }  from 'react'
import axios from "axios"
import Singlecontent from './Singlecontent';



const Movies = () => {
    const[content,setContent]=useState([]);
     
    const fetchtrending = async() => {
     const { data } = await axios.get(`https://api.themoviedb.org/3/discover/tv?api_key=293a0d2a522a19d4a78bda34e1dfd323&language=en-US&sort_by=popularity.desc&page=1&timezone=America%2FNew_York&include_null_first_air_dates=false&with_watch_monetization_types=flatrate`);

    //console.log(data);

    setContent(data.results);
};
useEffect(()=>{
    fetchtrending();
},[]);
    return (
        <div>
            
            <div>
            <span className="pagetitle">TV Series</span>
            
            <div className="trending">
                {
                   
                      content && content.map((c) =>(  <Singlecontent
                        key={c.id}
                        id={c.id}
                        poster={c.poster_path}
                        title={c.title || c.name}
                        date={c.first_air_date || c.release_date}
                        media_type="tv"
                        vote_average={c.vote_average}
                      />))
                }
                
            </div>
           
        </div>
        </div>
    )
}

export default Movies
