import "./Like.css"
import {useState} from "react";

export default function Like({flag}) {
    let [likes, setLikes] = useState(JSON.parse(localStorage.getItem("like")) || []);

    localStorage.setItem("like", JSON.stringify(likes))
    const remove = (id) => {
        const remove = likes.filter(val => val.id !== id)
        setLikes(remove)
    }

    return (
        <div className={flag ? "like-box-dark" : "like-box"}>
            <div className={flag ? "like-dark" : "like"}>
                {

                    likes && likes.map(value => <div className={"cart-like-box"} key={value.id}>
                        <img
                            className={"img-cart"}
                            src={'https://image.tmdb.org/t/p/w300' + value.path}
                            alt={value.id}/>
                        <button onClick={() => remove(value.id)} className={"btn-like"}>x</button>
                    </div>)
                }
            </div>
        </div>
    )
}