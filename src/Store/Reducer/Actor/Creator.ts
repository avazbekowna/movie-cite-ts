import {AppDispatch} from "../../store";
import axios from "axios";
import {language, movieFetching, movieFetchingError, movieFetchingSuccess} from "../Movies-kill/MovieSlice";
import {Apikey} from "../../../components/Apikey/apikey";
import {getActors, getActorsError, getActorsSuccess} from "./Actors";
import {getDetailError, getDetailSuccess} from "../Details/DetailSlice";
import {movieSearch, movieSearchError, movieSearchSuccess} from "../Search/Search";
import {detailActorsError, detailActorsSuccess} from "./ActorDetail";
import {getVideoError, getVideoSuccess} from "../Videos/VideoSlice";
import {MovieDetailActorsError, MovieDetailActorsSuccess} from "../Details/DetailMovie";


export const MovieDetailSliceCreat = (id: any, lan: string) => {
    return async (dispatch: AppDispatch) => {
        try {
            const responsive = await axios.get(`https://api.themoviedb.org/3/person/${id}/movie_credits?api_key=${Apikey}&language=${lan}`)
            dispatch(MovieDetailActorsSuccess(responsive.data.cast))
        } catch (e: any) {
            dispatch(MovieDetailActorsError(e.message))
        }
    }
}
export const Language = (lan: string) => (dispatch: AppDispatch) => {
    dispatch(language(lan))
}
export const VideoSlice = (id: any) => {
    return async (dispatch: AppDispatch) => {
        try {
            const responsive = await axios.get(`https://api.themoviedb.org/3/movie/${id}/videos?api_key=${Apikey}&language=en-US`)
            dispatch(getVideoSuccess(responsive.data.results))
        } catch (e: any) {
            dispatch(getVideoError(e.message))
        }
    }
}

export const MovieSearch = (name: string | undefined, lan: string) => {
    return async (dispatch: AppDispatch) => {
        try {
            // dispatch(movieSearch())
            const res = await axios.get(`https://api.themoviedb.org/3/search/movie?api_key=${Apikey}&query=${name}&language=${lan}`)
            const {data} = res
            dispatch(movieSearchSuccess(data.results))
        } catch (e: any) {
            dispatch(movieSearchError(e.message))
        }
    }
}

export const ActorsDetailSlice = (casId: any, lan: string) => {
    return async (dispatch: AppDispatch) => {
        try {
            const responsive = await axios.get(`https://api.themoviedb.org/3/person/${casId}?api_key=${Apikey}&language=${lan}`)
            const {data} = responsive
            dispatch(detailActorsSuccess(data))
        } catch (e: any) {
            dispatch(detailActorsError(e.message))
        }
    }
}

export const MovieDetailActors = (movieId: any, lan: string) => {
    return async (dispatch: AppDispatch) => {
        try {
            dispatch(getActors())
            const responsive = await axios.get(`https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=${Apikey}&language=${lan}`)
            dispatch(getActorsSuccess(responsive.data.cast))
        } catch (e: any) {
            dispatch(getActorsError(e.message))
        }
    }
}
export const MovieDetail = (movieId: any, lan: string) => {
    return async (dispatch: AppDispatch) => {
        try {
            const responsive = await axios.get(`https://api.themoviedb.org/3/movie/${movieId}?api_key=${Apikey}&language=${lan}`)
            const {data} = responsive
            dispatch(getDetailSuccess(data))
        } catch (e: any) {
            dispatch(getDetailError(e = 'error details'))
        }
    }
}

export const Creator = (lan: string, a: any) => {
    return async (dispatch: AppDispatch) => {
        try {
            dispatch(movieFetching())
            const responsive = await axios.get<any>(`https://api.themoviedb.org/3/movie/popular?api_key=${Apikey}&language=${lan}&page=${a}`)
            const {data} = responsive
            dispatch(movieFetchingSuccess(data.results))
        } catch (e: any) {
            dispatch(movieFetchingError(e = 'efsfghjfrfv'))
        }
    }
}
export const FetchingPopular = (a: number, lan: string) => {
    return async (dispatch: AppDispatch) => {
        try {
            dispatch(movieFetching())
            const responsive = await axios.get<any>(`https://api.themoviedb.org/3/movie/popular?api_key=${Apikey}&language=${lan}&page=${a}`)
            const {data} = responsive
            dispatch(movieFetchingSuccess(data.results))
        } catch (e: any) {
            dispatch(movieFetchingError(e = 'efsfghjfrfv'))
        }
    }
}
export const FetchingNewPlaying = (lan: string, a: any) => {
    return async (dispatch: AppDispatch) => {
        try {
            dispatch(movieFetching())
            const responsive = await axios.get<any>(`https://api.themoviedb.org/3/movie/now_playing?api_key=${Apikey}&language=${lan}&page=${a}`)
            const {data} = responsive
            dispatch(movieFetchingSuccess(data.results))
        } catch (e: any) {
            dispatch(movieFetchingError(e = 'efsfghjfrfv'))
        }
    }
}
export const FetchingRated = (lan: string, a: any) => {
    return async (dispatch: AppDispatch) => {
        try {
            dispatch(movieFetching())
            const responsive = await axios.get<any>(`https://api.themoviedb.org/3/movie/top_rated?api_key=${Apikey}&language=${lan}&page=${a}`)
            const {data} = responsive
            dispatch(movieFetchingSuccess(data.results))
        } catch (e: any) {
            dispatch(movieFetchingError(e = 'efsfghjfrfv'))
        }
    }
}


