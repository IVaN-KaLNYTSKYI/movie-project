import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import './App.css';
import Movie from "./components/movie/Movie";
import Header from "./components/header/Header";
import Home from "./components/home/Home";
import MovieDetail from "./components/movie-detail/MovieDetail";
import Like from "./components/like/Like";

function App() {
  return (
    <div>
        <Router>
            <Header/>
              <Switch>
                  <Route exact path={"/"} render={()=>{
                      return <Home/>
                  }}/>
                  <Route exact path={"/movies"} render={()=>{
                      return <Movie/>
                  }}/>
                  <Route path={`/movies/:id`} render={({match:{params:{id}}})=>{
                      return <MovieDetail id={id}/>
                  }}/>
                  <Route exact path={"/like"} render={()=>{
                      return <Like/>
                  }}/>
              </Switch>
        </Router>
    </div>
  );
}

export default App;
