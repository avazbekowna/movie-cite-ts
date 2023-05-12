import React, {useEffect, useState} from 'react';
import {useAppDispatch} from "../../../Hooks/dispatch";
import {useAppSelector} from "../../../Hooks/useAppSelector";
import {FetchingPopular} from "../../../Store/Reducer/Actor/Creator";

import {NavLink} from "react-router-dom";
import Card from "../Card/Card";


const MoviesPopular = () => {
    const dispatch = useAppDispatch()

    const [currentPage, setCurrentPage] = useState<number>(1)
    const pages = [];
    for (let i = 1; i <= 10; i++)
        pages.push(i)
    const detailsFilm = (el: any) => {
        setCurrentPage(el)
    }
    const {users, error, loading} = useAppSelector(state => state.MovieReducer)
    const {language} = useAppSelector((state) => state.MovieReducer)
    const {detail} = useAppSelector((state) => state.DetailReducer)

    useEffect(() => {
        dispatch(FetchingPopular(currentPage, language))
    }, [currentPage, language])

    if (loading) {
        return <h1>loading...</h1>
    }


    if (error) {
        return <h1>{error}</h1>
    }
    return (
        <>
            <div id='details' className="fixed w-full h-full left-0 top-0 z-10"></div>
            <div className='container'>
                <div className="z-20 relative pt-32">
                    <div className='flex  flex-wrap justify-between'>
                        {
                            users.map(el => (<Card el={el}/>))
                        }
                    </div>
                    <div className="flex my-9 items-center justify-center py-20">
                        <ul className="inline-flex -space-x-px">
                            {
                                pages.map((el) => (
                                    <li key={el}>
                                        <button
                                            onClick={() => detailsFilm(el)}
                                            className={el === currentPage ? "border py-2 px-2 bg-yellow-600 mx-2 mt-14" :
                                                'border py-2 bg-blue-900 px-4 mx-1 mt-14 rounded-2xl' }>{el}</button>
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

export default MoviesPopular;