import React from 'react';
import {IActors} from "../../../Types/TypeMovie/IMovie";
import Slider from 'react-slick'
import '../Detail-Pages/Detail.scss'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import PERSON from '../../../Img/full-name-8.png'
import {Link} from "react-router-dom";

interface IProps {
    actors: IActors[]
}

const Actors = ({actors}: IProps) => {
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

    return (
        <div>
            <div className='actors bg-amber-50 '>
                <div className='w-[1000px] h-[200px] pt-7'>
                    <Slider {...settings}>
                        {
                            actors.map(el => (
                                <div>
                                    {el.profile_path ?
                                        <Link to={`/Index/detail-cast/${el.id}`}>
                                            <img src={`https://www.themoviedb.org/t/p/w138_and_h175_face${el.profile_path}`}
                                                 width={120} alt=""/>
                                        </Link>
                                        :
                                        <img src={PERSON} width={170} alt=""/>}
                                </div>

                            ))
                        }
                    </Slider>
                </div>

            </div>
        </div>
    );
};

export default Actors;