import { configureStore } from "@reduxjs/toolkit";
import eventCartSlice from "../../src/Redux/eventCartSlice";
import { useDispatch, TypedUseSelectorHook, useSelector } from "react-redux";



export const store = configureStore({
    reducer: { 
        eventCart: eventCartSlice.reducer,
        

     }
});

export const useAppDispatch:()=>typeof store.dispatch=useDispatch;
export const useAppSelector:TypedUseSelectorHook<ReturnType<typeof store.getState>>=useSelector;