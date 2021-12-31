import React from 'react'
import { StyleSheet, View, Text, Button, TextInput } from 'react-native'
import { globalStyle } from '../styles/global'
import { Formik } from 'formik'
import * as yup from 'yup'


export default function ReviewForm({ addReview }) {

    const reviewSchema = yup.object({
        title: yup.string().required().min(3),
        body: yup.string().required().min(8), 
        rating: yup.string().required().test('rating_1-5', 'rating must be 1-5', (val)=>{
            return parseInt(val) < 6 && parseInt(val) > 0
        })
    })
    return (
        <View style={globalStyle.container}>
            <Formik
                initialValues={{ title: '', body: '', rating: '' }}
                validationSchema={reviewSchema}
                onSubmit={(values, action) => {
                    action.resetForm()
                    addReview(values)
                }}
            >
                {(formik) => {
                    return (
                        <View>
                            <TextInput
                                style={globalStyle.input}
                                placeholder="review title.."
                                onChangeText={formik.handleChange('title')}
                                value={formik.values.title}
                                onBlur={formik.handleBlur('title')}
                            />
                            <Text style={globalStyle.errorText}>{formik.touched.title && formik.errors.title}</Text>
                            <TextInput
                                multiline 
                                style={globalStyle.input}
                                placeholder="review description.."
                                onChangeText={formik.handleChange('body')}
                                value={formik.values.body}
                                onBlur={formik.handleBlur('body')}
                            />
                            <Text style={globalStyle.errorText}>{formik.touched.body && formik.errors.body}</Text>
                            <TextInput
                                style={globalStyle.input}
                                placeholder="rating (1-5)"
                                onChangeText={formik.handleChange('rating')}
                                value={formik.values.rating}
                                keyboardType="numeric"
                                onBlur={formik.handleBlur('rating')}
                            />
                            <Text style={globalStyle.errorText}>{formik.touched.rating && formik.errors.rating}</Text>
                            <Button title="submit" color="violet" onPress={formik.handleSubmit} />
                        </View>
                    )
                }}
            </Formik>
        </View>
    )
}