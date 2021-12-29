import { createStackNavigator } from 'react-navigation-stack'

import About from '../screens/About'
import Home from '../screens/Home';

const screens = {
    Home: {
        screen: Home,
        navigationOptions:{
            title: 'Home', 
        }
    },
    About: {
        screen: About, 
        navigationOptions:{
            title: 'About GameZone', 
        }
    },
}

const AboutStack = createStackNavigator(screens,{
    defaultNavigationOptions: {
        headerTintColor: '#333',
        headerStyle: {backgroundColor: 'coral'}
    }
});

export default AboutStack; 