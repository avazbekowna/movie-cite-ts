import {ISearch} from "../../../Types/TypeMovie/IMovie";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";

interface IMovieSearch {
    Search: ISearch[],
    loading: boolean,
    error: string,
}

const initialState: IMovieSearch = {
    Search: [],
    loading: false,
    error: 'привет призошла ошибка'
}

export const MovieSearch = createSlice({
    name: 'Search',
    initialState,
    reducers: {
        movieSearch(state) {
            state.loading = true;
            state.error = '';
        },
        movieSearchSuccess(state, action: PayloadAction<ISearch[]>) {
            state.loading = false;
            state.Search = action.payload;
            state.error = '';
        },
        movieSearchError(state, action: PayloadAction<string>) {
            state.loading = false
            state.Search = []
            state.error = action.payload
        }

    }
})

export const {movieSearch, movieSearchSuccess, movieSearchError} = MovieSearch.actions

export default MovieSearch.reducer