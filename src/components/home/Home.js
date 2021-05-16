import {useEffect, useState} from 'react';
import {getMovieSearch} from "../../services/api.movie-tmdb";

export default function Home() {
    let [movie, setMovie] = useState([]);
    let [page, setPage] = useState(1);
    let [totalPage, setTotalPage] = useState(null);
    let [total, setTotal] = useState(null);
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
        getMovieSearch(page, text).then(value => {
            setMovie([...value.data.results])
            setTotalPage(value.data.total_pages)
            setTotal(value.data.total_results)
        })
    }, [page])
    const add = (e) => {
        e.preventDefault();
    }
    return (
        <div className={"main"}>
            <div>{total}</div>
            <form onClick={add}>
                <input onChange={(e) => setText(e.target.value)}/>
                <button>bbb</button>
            </form>
            {
                text !== "" ? (
                    <div>
                        <div className={"conteiner"}>
                            {
                                movie.map((value, index) => {
                                    return <div key={index}>{value.title}</div>
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
                    </div>):<span>no film</span>
            }
        </div>
    )
}