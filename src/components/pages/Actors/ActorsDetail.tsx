import React, {useEffect, useState} from 'react';
import {useAppDispatch} from "../../../Hooks/dispatch";
import {useParams} from "react-router-dom";
import {ActorsDetailSlice} from "../../../Store/Reducer/Actor/Creator";
import {useAppSelector} from "../../../Hooks/useAppSelector";
import '../Detail-Pages/Detail.scss'
import DetailMovie from "../Detail-Pages/DetailMovie";

const ActorsDetail = () => {
    const [ViewMore, setViewMore] = useState(400)
    const dispatch = useAppDispatch()
    const {castId} = useParams()
    console.log(castId)
    const {actorDetail} = useAppSelector((state) => state.ActorsDetailSlice)
    const toggleViewMore = (text: any) => {
        setViewMore(ViewMore === 400 ? text.length : 400)
    }
    const {language} = useAppSelector((state) => state.MovieReducer)


    useEffect(() => {
        dispatch(ActorsDetailSlice(castId, language))
    }, [castId, language])
    return (
        <>
            <div id='detail-cast'>
                <div className='container'>
                    <div className='detail-cast pt-20'>
                        <div className='imagess'>
                            <img className='imagess-one'
                                 src={`https://www.themoviedb.org/t/p/w300_and_h450_bestv2${actorDetail.profile_path}`}
                                 alt=""/>
                        </div>
                        <div className='detail-cast-desc'>
                            <h1 className='text-4xl'>{actorDetail.name}</h1>
                            <h3 className='text-2xl py-4'>{actorDetail.place_of_birth}</h3>
                            <p className='biography'>{actorDetail.biography ? actorDetail.biography.slice(0, ViewMore) : actorDetail.biography}</p>
                            {
                                actorDetail.biography ? actorDetail.biography.length >= 400 ? <span onClick={() => {
                                    toggleViewMore(actorDetail.biography)
                                }
                                } style={{color: 'blue', cursor: 'grab'}}>
                               {ViewMore === 400 ? 'читать дальше..' : 'свернуть'}</span> : '' : ''
                            }
                        </div>
                    </div>
                </div>
            </div>
            <DetailMovie castId={castId}/>
        </>

    );
};

export default ActorsDetail;