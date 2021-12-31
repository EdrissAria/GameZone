import React from 'react'
import { StyleSheet, View, Text, Image } from 'react-native'

export default function About(){
    return (
        <View style={styles.container}>
            <Image source={require('../assets/game.png')} style={styles.aboutImage} />
            <Text style={styles.aboutText}>This is a simple app made by react native here you can add games with rating and show them on screen</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1, 
        flexDirection: 'column', 
        alignItems: 'center',
        padding: 30 
    },
    aboutText:{
        fontSize: 18, 
        color: '#666'
    },
    aboutImage:{
        width: 140, 
        height: 140, 
        marginBottom: 20
    }
})

 