import  { useState,useEffect }  from 'react'
import axios from "axios"
import Singlecontent from './Singlecontent';



const Trending = () => {
    
    const[content,setContent]=useState([]);
    const fetchtrending = async() => {
     const { data } = await axios.get(`https://api.themoviedb.org/3/trending/all/day?api_key=293a0d2a522a19d4a78bda34e1dfd323`);

    //console.log(data);

    setContent(data.results);
};
useEffect(()=>{
    fetchtrending();
},[]);
    return (
        <div>
            <span className="pagetitle">Trending</span>
            <div className="trending">
                {
                   
                        content && content.map((c) =>(  <Singlecontent
                        key={c.id}
                        id={c.id}
                        poster={c.poster_path}
                        title={c.title || c.name}
                        date={c.first_air_date || c.release_date}
                        media_type={c.media_type}
                        vote_average={c.vote_average}
                      />))
                }
                
            </div>
           
        </div>
    );
};



export default Trending
