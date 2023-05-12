import {IMovie} from "../../../Types/TypeMovie/IMovie";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";

interface IMovieState {
    users: IMovie[],
    loading: boolean,
    error: string,
    language: string
}


const initialState: IMovieState = {
    users: [],
    loading: false,
    error: '',
    language: ''
}

export const MovieSlice = createSlice({
    name: 'movies',
    initialState,
    reducers: {
        movieFetching(state) {
            state.loading = true
        },
        movieFetchingSuccess(state, action: PayloadAction<IMovie[]>) {
            state.loading = false
            state.users = action.payload
            state.error = ''
        },
        movieFetchingError(state, action: PayloadAction<string>) {
            state.loading = false
            state.users = []
            state.error = action.payload
        },
        language(state, action: PayloadAction<string>) {
            state.language = action.payload
        }
    }
})


export const {movieFetching, movieFetchingSuccess, movieFetchingError,language} = MovieSlice.actions

export default MovieSlice.reducer


