import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { incree, decree } from '../redux/slices/counter'

const Home = () => {
    const dispatch = useDispatch()
    const val = useSelector(state => state?.counterSlice)
    const inc = () => {
        dispatch(incree())
    }
    const dec = () => {
        dispatch(decree())
    }
    return (
        <View>
            <TouchableOpacity onPress={() => inc()}>
                <Text>+</Text>
            </TouchableOpacity>
            <Text>{val?.value}</Text>
            <TouchableOpacity onPress={() => dec()}>
                <Text>-</Text>
            </TouchableOpacity>
        </View>
    )
}

export default Home

const styles = StyleSheet.create({})