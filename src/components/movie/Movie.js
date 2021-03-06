import {useEffect, useState} from 'react';
import {getMovie, getMovieSearch} from "../../services/api.movie-tmdb";
import MovieList from "../movie-list/MovieList";
import './Movie.css'

export default function Movie({flag}) {
    let [movie, setMovie] = useState([]);
    let [page, setPage] = useState(1);
    let [totalPage, setTotalPage] = useState(null);
    let [text, setText] = useState("");

    const back = () => {
        page > 1 ? setPage(page - 1) : setPage(1)
    }
    const firstPage = () => {
        setPage(1)
    }

    const next = () => {
        page < totalPage ? setPage(page + 1) : setPage(totalPage)
    }
    const lastPage = () => {
        setPage(totalPage)
    }


    useEffect(() => {
        getMovie(page).then(value => {
            setMovie([...value.data.results])
            setTotalPage(value.data.total_pages)
        })
        getMovieSearch(page, text).then(value => {
            setMovie([...value.data.results])
            setTotalPage(value.data.total_pages)
        })

    }, [page, text])

    return (
        <div className={flag ? "main-dark" : "main"}>
            <div className={"search"}>
                <form>
                    <input placeholder={"Search"} onChange={(event => setText(event.target.value))}/>
                </form>
            </div>
            <div className={flag ? "conteiner-dark" : "conteiner"}>
                {
                    movie.map((value, index) => {
                        return (<MovieList key={index}
                                           item={value}
                        />)
                    })
                }
            </div>
            <div className={"page-paginator"}>
                <div className={flag ? "page-info-dark" : "page-info"}><span>Сторінка {page}</span></div>
                <div>
                    <button className={"btn-page"} onClick={firstPage}>first page</button>
                    <button className={"btn-page"} onClick={back}>back</button>
                    <button className={"btn-page"} onClick={next}>next</button>
                    <button className={"btn-page"} onClick={lastPage}>last page</button>
                </div>
            </div>
        </div>
    )
}