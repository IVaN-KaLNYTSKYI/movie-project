import "./MovieDetail.css"
import {useEffect, useState} from 'react';
import {getMovieId} from "../../services/api.movie-tmdb";
export default function MovieDetail ({id}) {
    let [movieDetail, setMovieDetail] = useState(null);
    useEffect(() => {
        getMovieId(id).then(value => {
            setMovieDetail(value)
        })
    }, [id])
    console.log(movieDetail)
  return(
      <div>
          {JSON.stringify(movieDetail)}
      </div>
  )
}