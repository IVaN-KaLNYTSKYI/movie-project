
export default function Like() {
const likes= JSON.parse(localStorage.getItem("like"))
    console.log(likes)
    return (
        <div>
            {
                likes&&likes.map(value => <div key={value.id}>{value.id}
                    <img
                        src={'https://image.tmdb.org/t/p/w300' + value.path}
                        alt={value.id}/>
                </div>)
            }
        </div>
    )
}