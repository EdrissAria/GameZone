import React, { useState } from 'react'
import { StyleSheet, View, Text, FlatList, TouchableOpacity, Modal, TouchableWithoutFeedback, Keyboard } from 'react-native'
import { globalStyle } from '../styles/global'
import Card from '../shared/card';
import { MaterialIcons } from '@expo/vector-icons'
import ReviewForm from './reviewForm';

export default function Home({ navigation }) {
    const [modalOpen, setModalOpen] = useState(false);

    const [reviews, setReviews] = useState([
        { title: 'Angry birds', rating: 5, body: 'this is angry birds mobile game', key: '1' },
        { title: 'Walking deads', rating: 2, body: 'this is walking deads mobile game', key: '2' },
        { title: 'Ludo', rating: 4, body: 'this is Ludo mobile game', key: '3' },
    ]);
    const addReview = (review) => {
        review.key = Math.random().toString();
        setReviews((currentReveiw) => {
            return [review, ...currentReveiw]
        })
        setModalOpen(false)
    }
    return (
        <View style={globalStyle.container}>
            <Modal visible={modalOpen} animationType="slide">
                <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                    <View style={styles.modalContent}>
                        <MaterialIcons
                            name='close'
                            size={24}
                            onPress={() => setModalOpen(false)}
                            style={{ ...styles.modalButton, ...styles.modalClose }}
                        />
                        <ReviewForm addReview={addReview} />
                    </View>
                </TouchableWithoutFeedback>

            </Modal>

            <MaterialIcons
                name='add'
                size={28}
                onPress={() => setModalOpen(true)}
                style={styles.modalButton}
            />

            <FlatList
                data={reviews}
                renderItem={({ item }) => (
                    <TouchableOpacity onPress={() => navigation.navigate('Review', item)}>
                        <Card>
                            <Text style={globalStyle.titleText}>{item.title}</Text>
                        </Card>
                    </TouchableOpacity>
                )}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    modalContent: {

    },
    modalButton: {
        alignSelf: 'center',
        marginBottom: 16,
        borderWidth: 1,
        borderRadius: 10,
        borderColor: '#ddd',
        padding: 6,
        shadowColor: '#ccc',
        shadowOffset: { width: 2, height: 2 },
    },
    modalClose: {
        marginTop: 16,
        marginBottom: 0
    }
})