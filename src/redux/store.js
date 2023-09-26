
import {
    persistStore, persistReducer,
    PURGE,
    REGISTER,
    REHYDRATE,
    FLUSH,
    PAUSE,
    PERSIST,
} from 'redux-persist'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web
import { combineReducers, configureStore } from '@reduxjs/toolkit'
import counterSlice from "./slices/counter"
import AsyncStorage from "@react-native-async-storage/async-storage";
const persistConfig = {
    key: 'root',
    storage: AsyncStorage,
}
let rootReducers = combineReducers({
    counterSlice: counterSlice
})

let persistedReducer = persistReducer(persistConfig, rootReducers)

export const store = configureStore({
    reducer: persistedReducer,
    middleware: getDefaultMiddleware =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            },
        }),
})