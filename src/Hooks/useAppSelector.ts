import {TypedUseSelectorHook, useSelector} from "react-redux";
import {rooState} from "../Store/store";

export const useAppSelector: TypedUseSelectorHook<rooState> = useSelector