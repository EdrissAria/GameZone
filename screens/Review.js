import React from 'react'
import { StyleSheet, View, Text, Image } from 'react-native'
import { globalStyle, ratingCount } from '../styles/global'
import Card from '../shared/card'

export default function Review({ navigation }) {
    const rating = navigation.getParam('rating');
    return (
        <View style={globalStyle.container}>
            <Card>
                <Text style={styles.title}>{navigation.getParam('title')}</Text>
                <Text style={styles.body}>{navigation.getParam('body')}</Text>
                <View style={styles.rating}>
                    <Text>Game Rating :</Text>
                    {ratingCount(rating)}
                </View>
            </Card>
        </View>
    )
}

const styles = StyleSheet.create({
    rating: {
        borderTopWidth: 1,
        borderTopColor: '#ccc',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 10,
        paddingVertical: 10,
    },
    title: {
        fontSize: 20,
        marginVertical: 10,
        textTransform: 'uppercase',
        letterSpacing: 1,
        color: '#777',
        fontWeight: 'bold'
    },
    body: {
        fontSize: 16,
        color: '#666'
    }
})

