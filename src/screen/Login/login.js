import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { useDispatch, useSelector } from 'react-redux'
import { onLogin } from '../../redux/slices/auth'

const LoginScreen = () => {
    const dispatch = useDispatch()
    const data = useSelector(state => state?.auth)
    console.log(data)
    const Login = (ev, ve) => {
        dispatch(onLogin(ev, ve))
    }
    return (
        <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
            <Text>Login</Text>
            <TouchableOpacity onPress={Login("harshtestserver@gmail.com", "admin")}>
                <Text style={{ color: "red", fontSize: 20 }}>Login</Text>
            </TouchableOpacity>
        </View>
    )
}

export default LoginScreen

const styles = StyleSheet.create({})