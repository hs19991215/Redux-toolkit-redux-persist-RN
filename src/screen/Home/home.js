import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const HomeScreen = () => {
    return (
        <View>
            <Text>Home</Text>
            <Button title='Press' onPress={() => { console.log("first") }} />
        </View>
    )
}

export default HomeScreen;

const styles = StyleSheet.create({})