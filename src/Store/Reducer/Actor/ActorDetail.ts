import {ActorsDetail} from "../../../Types/TypeMovie/IMovie";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";

interface ISliceActors {
    actorDetail: Partial<ActorsDetail>,
    loading: boolean,
    error: string
}

const initialState: ISliceActors = {
    actorDetail: {},
    loading: false,
    error: ''
}

export const ActorsDetailSlice = createSlice({
    name: 'detailActors',
    initialState,
    reducers: {
        detailActorsSlice(state, action: PayloadAction<any>) {
            state.loading = true;
        },
        detailActorsSuccess(state, action: PayloadAction<ActorsDetail>) {
            state.loading = false;
            state.actorDetail = action.payload;
            state.error = ''
        },
        detailActorsError(state, action: PayloadAction<string>) {
            state.loading = false;
            state.actorDetail = {}
            state.error = action.payload
        }
    }
})

export const {detailActorsSlice,detailActorsSuccess,detailActorsError} = ActorsDetailSlice.actions

export default ActorsDetailSlice.reducer