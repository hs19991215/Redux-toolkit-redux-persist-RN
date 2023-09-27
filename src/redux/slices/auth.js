import AsyncStorage from "@react-native-async-storage/async-storage";
import { createSlice } from "@reduxjs/toolkit";
import API_LINK from "../../utils/configs"
const initialState = {
    isLoading: false,
    error: null,
    userData: null,
    userDataList: [],
    data: []
}

const headers = {
    Accept: "application/json",
    "Content-Type": "application/json",
}

const Slice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        startLoading(state) {
            state.isLoading = true;
        },
        hasError(state, action) {
            state.isLoading = false;
            state.error = action.payload
        },
        onLoginSuccess(state, action) {
            state.isLoading = false
            state.userDataList = action.payload
        },
        onFetchSuccess(state, action) {
            state.isLoading = false
            state.data = action.payload
        }
    }
})

export default Slice.reducer;

export function onLogin() {
    return (dispatch) => {
        try {
            var myHeaders = new Headers();
            myHeaders.append("Content-Type", "application/json");

            var raw = JSON.stringify({
                "email": "hs@gmail.com",
                "password": "harsh123"
            });

            var requestOptions = {
                method: 'POST',
                headers: myHeaders,
                body: raw,
                redirect: 'follow'
            };

            fetch(`http://10.0.102.184:3000/login`, requestOptions)
                .then(response => response.json())
                .then(result => {
                    if (result) {
                        dispatch(Slice.actions.onLoginSuccess(result))
                    } else {

                    }
                })
                .catch(error => console.log('error', error));
        } catch (error) {
            dispatch(Slice.actions.hasError(error))
        }
    }
}

export function onGet() {
    return (dispatch) => {
        try {
            fetch("https://dummyjson.com/products/10", {
                method: "GET",
                headers: headers,
            })
                .then((response) => response.json())
                .then((result) => {
                    if (result) {
                        dispatch(Slice.actions.onFetchSuccess([result, result]))
                    }
                })
                .catch((error) => {
                    console.log("error", error)
                });
        } catch (error) {
            dispatch(Slice.actions.hasError(error))
        }

    }
}