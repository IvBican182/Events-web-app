import { configureStore } from "@reduxjs/toolkit";
import eventCartSlice from "./eventCart-slice";

export const store = configureStore({
    reducer: { 
        eventCart: eventCartSlice.reducer,
     }
});

