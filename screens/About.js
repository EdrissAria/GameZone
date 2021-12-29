import React from 'react'
import { StyleSheet, View, Text } from 'react-native'
import { globalStyle } from '../styles/global'

export default function About(){
    return (
        <View style={globalStyle.container}>
            <Text style={globalStyle.titleText}>This is About page</Text>
        </View>
    )
}

 