import React from 'react'
import { View, Text, ImageBackground, StyleSheet, Image} from 'react-native'
import {DrawerNavigatorItems} from 'react-navigation-drawer'

export default function Slide(props){
    return (
        <View>
            <View style={styles.bg}>
                <Image source={require('../assets/game.png')} style={styles.profile}/>
                <Text style={styles.text}>GameZone</Text>
            </View>
            <View style={styles.container}>
                <DrawerNavigatorItems {...props} />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    bg: {
        height: 140,  
        justifyContent: 'center', 
        alignItems: 'center',
        backgroundColor: 'violet', 
        margin: 0
    },
    profile: {
        width: 60, 
        height: 60, 
        margin: 10
    }, 
    text: {
        fontSize: 18,
        fontWeight: '600', 
        color: 'rgba(255, 255, 255, 0.7)'
    }
})