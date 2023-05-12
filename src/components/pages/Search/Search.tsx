import React, {useEffect, useState} from 'react';
import Card from "../Card/Card";
import {useAppDispatch} from "../../../Hooks/dispatch";
import {useParams} from "react-router-dom";
import {MovieSearch} from "../../../Store/Reducer/Actor/Creator";
import {useAppSelector} from "../../../Hooks/useAppSelector";
import '../Detail-Pages/Detail.scss'

const Search = () => {
    const dispatch = useAppDispatch()
    const {movieName} = useParams()
    const [current, setCurrent] = useState(1)
    const {Search} = useAppSelector((state) => state.MovieSearch)
    const {language} = useAppSelector((state) => state.MovieReducer)
    console.log(Search)
    useEffect(() => {
        dispatch(MovieSearch(movieName, language))
    }, [movieName, language])

    return (
        <div id='movies'>
            {
                Search.length ?
                    <div className="container">
                        <div className="movies pt-24">
                            {
                                Search.map(el => <Card el={el}/>)
                            }
                        </div>
                    </div> :
                    <div className='container'>
                        <div style={{
                            padding: '15% 0'
                        }}>
                            <h1>фильм который вы искали не найдено</h1>
                        </div>
                    </div>
            }
        </div>
    );
};

export default Search;