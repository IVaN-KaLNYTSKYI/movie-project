import './MovieList.css'
export default function MovieList({item}) {
    /*  const {title,popularity,release_date}=props*/
    /* poster_path*/

    return (
            <div className={"cart-box"}>
                <img className={"img-cart"} src={'https://image.tmdb.org/t/p/w200' + item.poster_path} alt={item.id}/>
                <span className={"movie-title"}>{item.title}</span>
                {/*{item.popularity}-
          {item.release_date}*/}
          {/*<div className={"movie-date"}>{item.release_date}</div>*/}
            </div>
    )
}