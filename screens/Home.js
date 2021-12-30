import React, {useState} from 'react'
import { StyleSheet, View, Text, FlatList, TouchableOpacity, Button} from 'react-native'
import { globalStyle } from '../styles/global'

export default function Home({navigation}){

    const [reviews, setReviews] = useState([
        {title: 'Angry birds', rating: 5, body: 'this is angry birds mobile game', key: '1'},
        {title: 'Walking deads', rating: 2, body: 'this is walking deads mobile game', key: '2'},
        {title: 'Ludo', rating: 4, body: 'this is Ludo mobile game', key: '3'},
    ]); 

    return (
        <View style={globalStyle.container}>
            <FlatList
                data={reviews}
                renderItem = {({item})=>(
                    <TouchableOpacity onPress={()=> navigation.navigate('Review', item)}>
                        <Text style={globalStyle.titleText}>{item.title}</Text>
                    </TouchableOpacity>
                )}
            />
        </View>
    )
}