import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import './App.css';
import Movie from "./components/movie/Movie";
import Header from "./components/header/Header";
import Home from "./components/home/Home";
import MovieDetail from "./components/movie-detail/MovieDetail";
import Like from "./components/like/Like";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <div className={"App"}>
        <Router>
            <Header/>
            <div className={"main"}>
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
            </div>
        </Router>
        <Footer/>
    </div>
  );
}

export default App;
