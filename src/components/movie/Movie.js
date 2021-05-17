import {useEffect, useState} from 'react';
import {getMovie, getMovieSearch} from "../../services/api.movie-tmdb";
import MovieList from "../movie-list/MovieList";
import './Movie.css'

export default function Movie() {
    let [movie, setMovie] = useState([]);
    let [page, setPage] = useState(1);
    let [totalPage, setTotalPage] = useState(null);
    let [text, setText] = useState("");

    const back = () => {page > 1 ? setPage(page - 1) : setPage(1)}
    const firstPage = () => {setPage(1)}

    const next = () => {page < totalPage ? setPage(page + 1) : setPage(totalPage)}
    const lastPage = () => {setPage(totalPage)}

    useEffect(() => {
        getMovie(page).then(value => {
            setMovie([...value.data.results])
            setTotalPage(value.data.total_pages)
        })
    },[page])
    useEffect(() => {
        getMovieSearch(page, text).then(value => {
            setMovie([...value.data.results])
            setTotalPage(value.data.total_pages)
        })
    }, [page])
    const add = (e) => {
        e.preventDefault();
    }
    return (
        <div className={"main"}>
            <form onClick={add}>
                <input onChange={(e) => setText(e.target.value)}/>
                <button>bbb</button>
            </form>
            <div className={"conteiner"}>
                {
                    movie.map((value, index) => {
                        return (<MovieList key={index}
                                           item={value}
                        />)
                    })
                }
            </div>
            <div className={"page-paginator"}>
                <div className={"page-info"}><span>Сторінка {page}</span></div>
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