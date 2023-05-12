import React, {useState} from 'react';
import './App.css';
import Header from "./components/Header";
import {Routes, Route} from "react-router-dom";
import MoviesPopular from "./components/pages/Popular/MoviesPopular";
import TopRated from "./components/pages/Top-Rated/TopRated";
import Movie from "./components/Movie/Movie";
import DetailPage from "./components/pages/Detail-Pages/DetailPage";
import NewPlaying from "./components/pages/New-Playing/NewPlaying";
import Search from "./components/pages/Search/Search";
import ActorsDetail from "./components/pages/Actors/ActorsDetail";


function App() {
    const [isDarkMode, setIsDarkMode] = useState<boolean>(false)
    const dark = () => {
        setIsDarkMode(!isDarkMode)
    }
    return (
        <div className={isDarkMode ? 'dark-theme' : 'light-theme'}>
            <Header dark={dark} isDarkMode={isDarkMode}/>
            <Routes>
                <Route path={'/'} element={<MoviesPopular/>}/>
                <Route path={'/TopRated'} element={<TopRated/>}/>
                <Route path={'/Now Playing'} element={<NewPlaying/>}/>
                <Route path={'/Upcoming'} element={<Movie/>}/>
                <Route path={'/movie/:movieId'} element={<DetailPage/>}/>
                <Route path={'/Index/detail-cast/:castId'} element={<ActorsDetail/>}/>
                <Route path={'/movies/movie-search/:movieName'} element={<Search/>}/>
            </Routes>
        </div>
    );
}

export default App;
