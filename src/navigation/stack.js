import React from 'react';
import { Button, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from '../screen/Login/login';
import SignUpScreen from '../screen/Signup/signup';
import HomeScreen from '../screen/Home/home';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Stack = createStackNavigator();


export default function AppStackNavigator() {
    const [routeName, setRouteName] = React.useState("LoginScreen")
    const [tokenData, setToken] = React.useState("")
    const token = async () => {
        const tokenGet = await AsyncStorage.getItem("token")

        console.log("token", tokenGet)
        setToken(tokenGet)
        if (tokenGet == null) {
            setRouteName("LoginScreen")
        } else if (tokenGet !== "") {
            setRouteName("HomeScreen")
        }
    }
    token()
    React.useEffect(() => {
        AsyncStorage.getItem("token").then(item => {
            console.log("item", item)
            if (item === null) {
                setRouteName("LoginScreen")
            } else {
                setRouteName("HomeScreen")
            }
        })
    }, [routeName])
    console.log(routeName)
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen options={{ headerShown: false }} name="LoginScreen" component={LoginScreen} />
                <Stack.Screen options={{ headerShown: false }} name="HomeScreen" component={HomeScreen} />
                <Stack.Screen options={{ headerShown: false }} name="SignUpScreen" component={SignUpScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}
