import React, {useEffect, useState} from 'react';
import {useAppDispatch} from "../../Hooks/dispatch";
import {useAppSelector} from "../../Hooks/useAppSelector";
import {Creator} from "../../Store/Reducer/Actor/Creator";
import Card from "../pages/Card/Card";

const Movie = () => {

    const [currentPage, setCurrentPage] = useState<number>(1)
    const pages = [];
    for (let i = 1; i <= 10; i++)
        pages.push(i)
    const detailsFilm = (el: any) => {
        setCurrentPage(el)
    }
    const dispatch = useAppDispatch()
    const {users, error, loading, language} = useAppSelector(state => state.MovieReducer)
    const {detail} = useAppSelector((state) => state.DetailReducer)
    useEffect(() => {
        dispatch(Creator(language,currentPage))
    }, [language,currentPage])


    if (loading) {
        return <h1>loading...</h1>
    }


    if (error) {
        return <h1>{error}</h1>
    }
    return (
        <>
            <div id='details' className="fixed w-full h-full left-0 top-0 z-10"
                 style={{background: `url("https://themoviedb.gameszonehub.workers.dev/t/p/w1920_and_h800_multi_faces${detail.backdrop_path}") no-repeat center/cover`}}></div>
            <div className='container'>
                <div className='z-20 relative pt-32'>
                    <div className='flex  flex-wrap justify-between'>
                        {
                            users.map(el => <Card el={el}/>)
                        }
                    </div>
                    <div className="flex my-9 items-center justify-center py-20">
                        <ul className="inline-flex -space-x-px">
                            {
                                pages.map((el) => (
                                    <li key={el}>
                                        <button
                                            onClick={() => detailsFilm(el)}
                                            className={el === currentPage ? "border py-2 px-4 bg-gray-600 mx-4 mt-14" :
                                                'border py-2 bg-gray-600 px-4 mx-4 mt-14'}>{el}</button>
                                    </li>
                                ))
                            }
                        </ul>
                    </div>
                </div>
            </div>
        </>


    );
};

export default Movie;