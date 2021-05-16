export default function Like() {
    const localData = [];
    const movieData = [];
    for (let item in localStorage) {
        if (item.startsWith("like")) {
            localData.push(item)
        }
    }
    // eslint-disable-next-line array-callback-return
    localData.map((value) => {
            return movieData.push(JSON.parse(localStorage.getItem(`${value}`)))
        }
    )

    console.log(localData)
    console.log(movieData)
    return (
        <div>
            {
                movieData.map(value => <div key={value.id}>{value.id}
                    <img
                        src={'https://image.tmdb.org/t/p/w200' + value.photo}
                        alt={value.id}/>
                </div>)
            }

        </div>
    )
}