import React from 'react'
import { StyleSheet, View } from 'react-native'

export default function Card({children}){
    return(
        <View style={styles.card}>
            <View style={styles.cardContent}>
                {children}
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    card:{
        borderRadius: 6,
        backgroundColor: '#fff',
        shadowOffset: {width: 2, height: 2},
        shadowColor: '#aaa',
        shadowOpacity: 0.3,
        shadowRadius: 4, 
        marginHorizontal: 4, 
        marginVertical: 6
    },
    cardContent:{
        marginHorizontal: 16,
        marginVertical: 10
    }
})