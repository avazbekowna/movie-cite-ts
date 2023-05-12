import {combineReducers, configureStore} from "@reduxjs/toolkit";
import MovieReducer from './Reducer/Movies-kill/MovieSlice'
import DetailReducer from './Reducer/Details/DetailSlice'
import ActorsReducer from './Reducer/Actor/Actors'
import MovieSearch from './Reducer/Search/Search'
import ActorsDetailSlice from "./Reducer/Actor/ActorDetail";
import VideoSlice from './Reducer/Videos/VideoSlice'
import MovieDetail from './Reducer/Details/DetailMovie'

const rootSate = combineReducers({
    MovieReducer,
    DetailReducer,
    ActorsReducer,
    MovieSearch,
    ActorsDetailSlice,
    VideoSlice,
    MovieDetail
})

export const setUpStore = () => {
    return configureStore({
        reducer: rootSate
    })
}

export type rooState = ReturnType<typeof rootSate>
export type AppStore = ReturnType<typeof setUpStore>
export type AppDispatch = AppStore['dispatch']