import {IDetailMovie} from "../../../Types/TypeMovie/IMovie";
import {createSlice} from "@reduxjs/toolkit";

interface IDetailMovieSlice {
    detailMovie: IDetailMovie[]
    loading: boolean
    error: string

}

const initialState: IDetailMovieSlice = {
    detailMovie: [],
    loading: false,
    error: ''
}

export const MovieDetailSlice = createSlice({
    name: 'MovieDetailSlice',
    initialState,
    reducers: {
        MovieDetailActors(state) {
            state.loading = true
        },
        MovieDetailActorsSuccess(state, action) {
            state.loading = false
            state.detailMovie = action.payload
            state.error = ''
        },
        MovieDetailActorsError(state, action) {
            state.loading = false
            state.detailMovie = []
            state.error = action.payload
        }
    }
})

export const {MovieDetailActorsSuccess, MovieDetailActorsError, MovieDetailActors} = MovieDetailSlice.actions

export default MovieDetailSlice.reducer