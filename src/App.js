import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import './App.css';
import Movie from "./components/movie/Movie";
import Header from "./components/header/Header";
import Home from "./components/home/Home";
import MovieDetail from "./components/movie-detail/MovieDetail";
import Like from "./components/like/Like";
import Footer from "./components/footer/Footer";
import {useEffect, useState} from "react";


function App() {
    let [flag, setFlag] = useState(getStyle())

    useEffect(() => {
        localStorage.setItem("dark", JSON.stringify(flag))
    }, [flag])

    function getStyle() {
        const seveStyle = JSON.parse(localStorage.getItem("dark"))
        return seveStyle || false
    }

    return (
        <div className={"App"}>
            <Router>
                <div className={"tema"}>
                    <Header flag={flag}/>
                    <div className={"theme"}>
                        <span className={"theme-light"} style={{color: flag ? "grey" : "yellow"}}>☀︎</span>
                        <button style={flag?{background:"red"}:{background:"white"}} onClick={() => {
                            setFlag(!flag)
                        }}>{flag ? "dark" : "ligth"}</button>
                        <span className={"theme-dark"} style={{color: flag ? "slateblue" : "grey"}}>☾</span>
                    </div>
                </div>
                <div className={"main"}>
                    <Switch>
                        <Route exact path={"/"} render={() => {
                            return <Home flag={flag}/>
                        }}/>
                        <Route exact path={"/movies"} render={() => {
                            return <Movie flag={flag}/>
                        }}/>
                        <Route path={`/movies/:id`} render={({match: {params: {id}}}) => {
                            return <MovieDetail flag={flag} id={id}/>
                        }}/>
                        <Route exact path={"/like"} render={() => {
                            return <Like flag={flag}/>
                        }}/>
                    </Switch>
                </div>
            </Router>
            <Footer flag={flag}/>
        </div>
    );
}

export default App;
