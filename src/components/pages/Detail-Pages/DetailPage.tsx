import React, {useEffect} from 'react';
import {useAppDispatch} from "../../../Hooks/dispatch";
import {useAppSelector} from "../../../Hooks/useAppSelector";
import './Detail.scss'
import {MovieDetail, MovieDetailActors} from "../../../Store/Reducer/Actor/Creator";
import {useParams} from "react-router-dom";
import Actors from "../Actors/Actors";
import Video from "../Detail-Video/Video";

const DetailPage = () => {
    const {movieId} = useParams()
    const dispatch = useAppDispatch()
    const {error, loader, detail} = useAppSelector((state) => state.DetailReducer)
    const {actors} = useAppSelector((state) => state.ActorsReducer)
    const {language} = useAppSelector((state) => state.MovieReducer)
    useEffect(() => {
        dispatch(MovieDetail(movieId, language))
        dispatch(MovieDetailActors(movieId, language))
    }, [movieId, language]);

    if (loader) {
        return <h1>loading...</h1>
    }
    if (error) {
        return <h1>{error}</h1>
    }
    return (
        <>
            <div id='detail'>
                <div className='container'>
                    <div className='detail-card'>
                        {
                            <div className=''>
                                <div className='flex pt-16 pb-16 justify-between'>
                                    <img className='images'
                                         src={`https://www.themoviedb.org/t/p/w300_and_h450_bestv2${detail.poster_path}`}
                                         alt=""/>
                                    <div>
                                        <h1 className='text-2xl'>{detail.title}</h1>
                                        <p className='w-[700px] text-white text-1xl  leading-9 pt-9'>{detail.overview}</p>
                                        <div>
                                            <div className="vote" style={{
                                                background: `conic-gradient(yellow,${Math.round(detail.vote_average * 10) * 3.59})`
                                            }}>
                                                <h3>
                                                    {Math.round(detail.vote_average * 10)} %
                                                </h3>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        }
                    </div>
                </div>
                <Actors actors={actors}/>
            </div>
            <div>
                <Video movieId={movieId}/>
            </div>
        </>

    );
};

export default DetailPage;