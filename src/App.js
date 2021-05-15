import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import './App.css';
import Movie from "./components/movie/Movie";
import Header from "./components/header/Header";
import Home from "./components/home/Home";
import MovieDetail from "./components/movie-detail/MovieDetail";

function App() {
  return (
    <div>
        <Router>
            <Header/>
              <Switch>
                  <Route exact path={"/"} render={()=>{
                      return <Home/>
                  }}/>
                  <Route exact path={"/movie"} render={()=>{
                      return <Movie/>
                  }}/>
                  <Route path={`/movie/:id`} render={({match:{params:{id}}})=>{
                      return <MovieDetail id={id}/>
                  }}/>
              </Switch>
        </Router>
    </div>
  );
}

export default App;
