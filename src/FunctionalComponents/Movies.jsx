import axios from 'axios';
import React, { useEffect, useState } from 'react';


const Movies = () => {
const [movieList, setMovieList] = useState([]);
useEffect(()=>{
  getMovie()
   },[])
  async function getMovie (){
  let response = await axios.get('https://api.themoviedb.org/3/movie/popular?api_key=e6ba2ce18b884ae33a036a46d64db58f')
  console.log(response.data.results);
  }

  return (
    <div>
      <>
         
      </>
    </div>
  )
}

export default Movies