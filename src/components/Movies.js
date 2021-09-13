import React from 'react'
import  { useState,useEffect }  from 'react'
import axios from "axios"
import Singlecontent from './Singlecontent';



const Movies = () => {
    const[content,setContent]=useState([]);
     const [selectedGenres, setselectedGenres] = useState([]);
    
    const fetchtrending = async() => {
     const { data } = await axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=293a0d2a522a19d4a78bda34e1dfd323&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate`);

    //console.log(data);

    setContent(data.results);
};
useEffect(()=>{
    fetchtrending();
},[]);
    return (
        <div>
            
            <div>
            <span className="pagetitle">Movies</span>
          
            <div className="trending">
                {
                   
                      content && content.map((c) =>(  <Singlecontent
                        key={c.id}
                        id={c.id}
                        poster={c.poster_path}
                        title={c.title || c.name}
                        date={c.first_air_date || c.release_date}
                        media_type="movie"
                        vote_average={c.vote_average}
                      />))
                }
                
            </div>
           
        </div>
        </div>
    )
}

export default Movies
