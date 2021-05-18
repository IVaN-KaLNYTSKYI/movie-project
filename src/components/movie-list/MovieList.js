import './MovieList.css'
import {Link} from "react-router-dom";

export default function MovieList({item}) {

    return (
        <div className={"cart-box"}>
            <img className={"img-cart"}
                 src={'https://image.tmdb.org/t/p/original' + item.poster_path}
                 alt={item.id}/>
            <Link to={"/movies/" + item.id}><span className={"movie-title"}>{item.title}</span></Link>
            <div className={"movie-rating"}>
                <span>{item.vote_average}</span>
            </div>
        </div>
    )
}