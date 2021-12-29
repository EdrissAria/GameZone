import React from 'react'
import { StyleSheet, View, Text, Button } from 'react-native'
import { globalStyle } from '../styles/global'

export default function Review({navigation}){

     
    return (
        <View style={globalStyle.container}>
            <Text style={globalStyle.titleText}>{navigation.getParam('title')}</Text>
            <Text style={globalStyle.titleText}>{navigation.getParam('body')}</Text>
            <Text style={globalStyle.titleText}>{navigation.getParam('rating')}</Text>
        </View>
    )
}

 