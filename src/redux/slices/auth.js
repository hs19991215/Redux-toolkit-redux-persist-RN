import AsyncStorage from "@react-native-async-storage/async-storage";
import { createSlice } from "@reduxjs/toolkit";
import API_LINK from "../../utils/configs"
console.log(API_LINK)
const initialState = {
    isLoading: false,
    error: null,
    userData: null,
    userDataList: []
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
        }
    }
})

export default Slice.reducer;

export function onLogin(email, password) {
    return (dispatch) => {
        try {
            var myHeaders = new Headers();
            myHeaders.append("Content-Type", "application/json");

            var raw = JSON.stringify({
                "email": email,
                "password": password
            });

            var requestOptions = {
                method: 'POST',
                headers: myHeaders,
                body: raw,
                redirect: 'follow'
            };

            fetch(`${API_LINK}/login`, requestOptions)
                .then(response => response.json())
                .then(result => {
                    if (result?.status == 200) {
                        dispatch(Slice.actions.onLoginSuccess(result))
                    }
                })
                .catch(error => console.log('error', error));
        } catch (error) {
            dispatch(Slice.actions.hasError(error))
        }
    }
}