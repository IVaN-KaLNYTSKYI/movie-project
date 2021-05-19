import axios from "axios";

let options={
    baseURL:'https://api.themoviedb.org/3'
}

let axiosInstance = axios.create(options);

const API_KEY="?api_key=8aaf14eada5c1779a594aaa553b31207"
const getMovie = (page) => {
    return axiosInstance.get('/discover/movie'+API_KEY+"&page="+page); // promise
};
const getMovieId = (id) => {
    return axiosInstance.get('/movie/'+id+API_KEY); // promise
};
const getMovieVideos = (id) => {
    return axiosInstance.get('/movie/'+id+"/videos"+API_KEY); // promise
};
const getMovieSearch = (page,text) => {
    return axiosInstance.get("/search/movie"+API_KEY+"&query="+text+"&page="+page); // promise
};
const getMoviePopular=()=>{
    return axiosInstance.get("/movie/popular"+API_KEY+"&page=1");

}
const getMovieNoPopular=()=>{
    return axiosInstance.get("/movie/popular"+API_KEY+"&page=434");

}

export {getMovie,getMovieVideos,getMovieId,getMovieSearch,getMoviePopular,getMovieNoPopular}