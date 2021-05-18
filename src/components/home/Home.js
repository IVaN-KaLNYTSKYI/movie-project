import {useEffect, useState} from 'react';
import {getMoviePopular} from "../../services/api.movie-tmdb";
import "./MoviePopular.css"

export default function Home() {

    const [moviePopular, setMoviePopular] = useState([])
    useEffect(() => {
        getMoviePopular().then(value => {
            setMoviePopular([...value.data.results])
        })
    }, [])
    console.log(moviePopular)
    return (
        <div>
            <div className={"er"}>
                {
                    moviePopular.map(value => {
                        return <img key={value.id} /*className={"img-cart"}*/
                                    src={'https://image.tmdb.org/t/p/original' + value./*poster_path*/backdrop_path}
                                    alt={value.id}/>
                    })
                }
            </div>
            <div>
                dede
            </div>
        </div>)
}