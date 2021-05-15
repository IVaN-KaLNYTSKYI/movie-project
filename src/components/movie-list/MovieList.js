import './MovieList.css'
import {Link} from "react-router-dom";
import {useEffect, useState} from 'react';
export default function MovieList({item}) {

const like=(e)=>{
    e.preventDefault();
    const like={
        id:item.id,
        photo:item.poster_path
    }
    let arr=[]
    arr.push(like)
    localStorage.setItem("like"+item.id,JSON.stringify(arr))
}

    return (
            <div className={"cart-box"}>
                <img className={"img-cart"} src={'https://image.tmdb.org/t/p/w200' + item.poster_path} alt={item.id}/>
               <Link to={"/movie/"+item.id}><span className={"movie-title"}>{item.title}</span></Link>
                <div className={"movie-rating"}><span>{item.vote_average}</span></div>
                <button onClick={like}>like</button>
            </div>
    )
}