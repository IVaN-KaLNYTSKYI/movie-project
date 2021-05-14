import {useEffect, useState} from 'react';
import {getMovie} from "../../services/api.movie-tmdb";
import MovieList from "../movie-list/MovieList";

export default function Movie() {
    let [movie, setMovie] = useState([]);
    useEffect(() => {
        getMovie().then(value => setMovie([...value.data.results]))
    }, [])
    console.log(movie)
    return (
        <div>
            {
          movie.map((value,index) => {
              return(<MovieList key={index}
                  item={value}
              />)
          })
            }
        </div>
    )
}