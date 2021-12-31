import React from 'react'
import { StyleSheet, View, Text, Image} from 'react-native'
import {MaterialIcons} from '@expo/vector-icons'

export default function Header({navigation, title}){

    const openMenu = () => {
        navigation.openDrawer()
    }
    return(
        <View style={styles.header}>
            <MaterialIcons name='menu' color='#444' size={28} onPress={openMenu} style={styles.icon} />            
            <View style={{flexDirection: 'row'}}>
                <Text style={styles.headerText}>{title}</Text>
                <Image source={require('../assets/game.png')} style={styles.headerImage}/>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    header:{
        width: '100%', 
        height: '100%', 
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    headerText:{
        fontWeight: 'bold',
        fontSize: 20,
        color: '#444',
        letterSpacing: 1, 
        marginHorizontal: 8
    },
    icon:{
        position: 'absolute',
        left: 10
    }, 
    headerImage: {
        width: 26, 
        height: 26, 
    }
})