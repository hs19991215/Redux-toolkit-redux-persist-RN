import { Button, StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { useDispatch, useSelector } from 'react-redux'
import { onGet, onLogin } from '../../redux/slices/auth'

const LoginScreen = () => {
    const dispatch = useDispatch()
    const dataGet = useSelector(state => state?.auth)
    useEffect(() => {
        dispatch(onGet())

    }, [])
    const Login = (ev, ve) => {
        dispatch(onLogin())
    }
    return (
        <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
            <Text>{dataGet?.data[0]?.brand}</Text>
            <Button title='Press' onPress={() => Login()} />
        </View>
    )
}

export default LoginScreen

const styles = StyleSheet.create({})