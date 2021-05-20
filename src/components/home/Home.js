import {useEffect, useState} from 'react';
import {getMovieNoPopular, getMoviePopular} from "../../services/api.movie-tmdb";
import "./MoviePopular.css"
import {Link} from "react-router-dom";


export default function Home({flag}) {
    const [moviePopular, setMoviePopular] = useState([])
    const [movieNoPopular, setMovieNoPopular] = useState([])
    useEffect(() => {
        getMoviePopular().then(value => {
            setMoviePopular([...value.data.results])
        })
        getMovieNoPopular().then(value => {
            setMovieNoPopular([...value.data.results])
        })
    }, [])
    console.log(moviePopular)
    console.log(movieNoPopular)

    return (
        <div className={flag?"bod-dark":"bod"}>
            <div className={flag?"popular-title-dark":"popular-title"}><span>Popular Films</span></div>
            <div className={"home"}>
                {
                    moviePopular.map(value => {
                        return <div className={"home-popular"} >
                            <img key={value.id}
                                    src={'https://image.tmdb.org/t/p/original' + value./*poster_path*/backdrop_path}
                                    alt={value.id}/>
                                    <Link to={"/movies/" + value.id}>Details</Link>
                        </div>
                    })
                }
            </div>
            <div className={flag?"popular-title-dark":"popular-title"}><span>Not Popular Films</span></div>
            <div className={"home"}>
                {
                    movieNoPopular.map(value => {
                        return <div className={"home-popular"} >
                            <img key={value.id}
                                 src={'https://image.tmdb.org/t/p/original' + value./*poster_path*/backdrop_path}
                                 alt={value.id}/>
                            <Link to={"/movies/" + value.id}>Details</Link>
                        </div>
                    })
                }
            </div>
        </div>)
}