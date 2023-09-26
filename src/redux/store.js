
import {
    persistStore, persistReducer,
    PURGE,
    REGISTER,
    REHYDRATE,
    FLUSH,
    PAUSE,
    PERSIST,
} from 'redux-persist' // defaults to localStorage for web
import { combineReducers, configureStore } from '@reduxjs/toolkit'
import counterSlice from "./slices/counter"
import AsyncStorage from "@react-native-async-storage/async-storage";
import auth from './slices/auth';

const persistConfig = {
    key: 'root',
    storage: AsyncStorage,
}
let rootReducers = combineReducers({
    counterSlice: counterSlice,
    auth: auth
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