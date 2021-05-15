import "./MovieDetail.css"
import {useEffect, useState} from 'react';
import {getMovieId, getMovieVideos} from "../../services/api.movie-tmdb";
import MovieVideos from "../movie-videos/MovieVideos";

export default function MovieDetail({id}) {
    let [movieDetail, setMovieDetail] = useState(null);
    let [movieDetailVideos, setMovieDetailVideos] = useState(null);
    useEffect(() => {
        getMovieId(id).then(value => {
            setMovieDetail(value.data)
        })
    }, [id])
    useEffect(() => {
        getMovieVideos(id).then(value => {
            setMovieDetailVideos(value.data.results)
        })
    }, [id])
    console.log(movieDetail)
    console.log(movieDetailVideos)
    return (
        <div className={"movie-detail-box"}>
            {
                movieDetail && (
                    <div className={"movie-detail"}>
                        <div className={"movie-box-img"}>
                            <img className={"movie-detail-img"}
                                 src={'https://image.tmdb.org/t/p/w300' + movieDetail.poster_path}
                                 alt={movieDetail.id}/>
                        </div>
                        <div>
                            <div className={"movie-info-detail"}>
                                <div className={"movie-detail-title-box"}>
                                    <span className={"movie-detail-title"}>{movieDetail.original_title}</span>
                                    <span
                                        className={"movie-detail-release"}>({movieDetail.release_date.split("-")[0]})</span>
                                </div>
                                <div className={"movie-detail-vote-box"}>
                                    <span>Vote Average:</span>
                                    <div className={"movie-detail-vote"}>{movieDetail.vote_average}</div>
                                </div>
                                <div className={"movie-detail-genres-box"}>
                                    Genres:
                                    {movieDetail.genres.map((value) => {
                                        return <span className={"movie-detail-genres"}
                                                     key={value.id}> {value.name}</span>
                                    })
                                    }
                                </div>

                                <div className={"movie-detail-lan"}>Original Language:<span>{movieDetail.original_language}</span></div>
                                <div className={"movie-detail-pop"}>Popularity:<span>{movieDetail.popularity}</span></div>
                                <div className={"movie-detail-ove"}>Overview:<span>{movieDetail.overview}</span></div>
                            </div>
                        </div>
                    </div>
                )
            }
            {
                movieDetailVideos&&(
                    // eslint-disable-next-line array-callback-return
                    movieDetailVideos.map((value,index) =>{
                        if(index===0) {
                            return <MovieVideos
                                key={value.id}
                                value={value}
                            />
                        }
                    })
                )
            }
        </div>
    )
}