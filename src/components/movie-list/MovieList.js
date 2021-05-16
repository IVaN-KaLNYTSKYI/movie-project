import './MovieList.css'
import {Link} from "react-router-dom";
import {useState} from "react";
export default function MovieList({item}) {
    let [text, setText] = useState("");
    setText("yes")
const like=(e)=>{
    e.preventDefault();
    const like={
        id:item.id,
        photo:item.poster_path
    }
    localStorage.setItem("text"+item.id,JSON.stringify(text))
    localStorage.setItem("like" + item.id, JSON.stringify(like))

}
    return (
            <div className={"cart-box"}>
                <img className={"img-cart"} src={'https://image.tmdb.org/t/p/w200' + item.poster_path} alt={item.id}/>
               <Link to={"/movie/"+item.id}><span className={"movie-title"}>{item.title}</span></Link>
                <div className={"movie-rating"}><span>{item.vote_average}</span></div>
                <button onClick={like}>like</button>
                <span>{text}</span>
            </div>
    )
}