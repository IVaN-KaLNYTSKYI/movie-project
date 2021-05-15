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
/*const getUserSearch = (page) => {
    return axiosInstance.get('/users?page='+page); // promise
};*/

export {getMovie/*,getUserSearch*/,getMovieId}