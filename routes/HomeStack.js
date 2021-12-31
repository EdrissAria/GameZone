import { createStackNavigator, HeaderBackground } from 'react-navigation-stack'
import Home from '../screens/Home';
import Review from '../screens/Review';
import Header from '../shared/Header';
import React from 'react';


const screens = {
    Home: {
        screen: Home, 
        navigationOptions: ({navigation})=>{
            return {
                headerTitle: () => <Header navigation={navigation} title='GameZone' />
            }
        }
    },
    Review: {
        screen: Review,
        navigationOptions:{
            title: 'Review Details', 
        }
    }
}

const HomeStack = createStackNavigator(screens,{
    defaultNavigationOptions: {
        headerTintColor: '#333',
        headerStyle: {backgroundColor: 'violet'}
    }
});

export default HomeStack;