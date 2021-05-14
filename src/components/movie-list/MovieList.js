export default function MovieList ({item}) {
  /*  const {title,popularity,release_date}=props*/
   /* poster_path*/
  return(
      <div>
        {item.title}-
          <img src={'https://image.tmdb.org/t/p/w300'+item.poster_path} alt={item.id}/>
          {item.popularity}-
          {item.release_date}
      </div>
  )
}