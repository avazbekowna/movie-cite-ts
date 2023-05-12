import {IActors, IDetail} from "../../../Types/TypeMovie/IMovie";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";

interface IDetailActors {
    actors: IActors[],
    loading: boolean,
    error: string,
}

const initialState: IDetailActors = {
    actors: [],
    loading: false,
    error: ''
}

export const ActorSlice = createSlice({
    name: 'actors',
    initialState,
    reducers: {
        getActors(state) {
            state.loading = true;
        },
        getActorsSuccess(state, action:PayloadAction<IActors[]>) {
            state.loading = false;
            state.actors = action.payload;
            state.error = ''
        },
        getActorsError(state,action){
            state.loading = false;
            state.actors = []
            state.error = action.payload;
        }
    }
})

export const {
    getActors,
    getActorsError,
    getActorsSuccess,
} = ActorSlice.actions


export default ActorSlice.reducer

