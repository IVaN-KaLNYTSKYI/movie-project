import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import './App.css';
import Movie from "./components/movie/Movie";
import Header from "./components/header/Header";
import Home from "./components/home/Home";

function App() {
  return (
    <div>
        <Router>
            <Header/>
              <Switch>
                  <Route exact path={"/"} render={()=>{
                      return <Home/>
                  }}/>
                  <Route path={"/movie"} render={()=>{
                      return <Movie/>
                  }}/>
              </Switch>
        </Router>
    </div>
  );
}

export default App;
