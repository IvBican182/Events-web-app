import { configureStore } from "@reduxjs/toolkit";
import eventCartSlice from "../../src/Redux/eventCartSlice";
import { useDispatch, TypedUseSelectorHook, useSelector } from "react-redux";
import storage from "redux-persist/lib/storage";
import { persistReducer, persistStore } from "redux-persist";
import { thunk } from "redux-thunk";



const persistConfig = {
    key: "root",
    storage,
}

const persistedReducer = persistReducer(persistConfig, eventCartSlice.reducer)

export const store = configureStore({
    reducer: { 
        eventCart: persistedReducer,
        middleware: [thunk]
        

     }
});

export const persistor = persistStore(store);
export const useAppDispatch:()=>typeof store.dispatch=useDispatch;
export const useAppSelector:TypedUseSelectorHook<ReturnType<typeof store.getState>>=useSelector;