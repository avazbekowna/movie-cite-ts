import React, {useEffect} from 'react';
import {useAppDispatch} from "../../../Hooks/dispatch";
import {MovieDetailSliceCreat} from "../../../Store/Reducer/Actor/Creator";
import {useAppSelector} from "../../../Hooks/useAppSelector";
import Slider from "react-slick";
import './Detail.scss'
import {Link} from "react-router-dom";

interface ICastDetailMovie {
    castId: string | undefined
}

const DetailMovie = ({castId}: ICastDetailMovie) => {
    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 2000,
        cssEase: "linear"
    };
    const dispatch = useAppDispatch()
    const {detailMovie} = useAppSelector((state) => state.MovieDetail)
    const {language} = useAppSelector((state) => state.MovieReducer)
    console.log(detailMovie)
    useEffect(() => {
        dispatch(MovieDetailSliceCreat(castId, language))
    }, [castId, language])
    return (
        <div id='detailMovies'>
            <div>
                <div className='MovieDetailSlice'>
                    <div className='detailMovie bg-gray-600 '>
                        <div className='w-[1000px] h-[220px] pt-5'>
                            <Slider {...settings}>
                                {
                                    detailMovie.map(el => (
                                        <div>

                                            <Link to={`/movie/${el.id}`}>
                                                <img
                                                    src={`https://www.themoviedb.org/t/p/w300_and_h450_bestv2/${el.poster_path}`}
                                                    width={120} alt=""/>
                                            </Link>

                                        </div>
                                    ))
                                }
                            </Slider>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default DetailMovie;