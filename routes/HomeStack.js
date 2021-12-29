import { createStackNavigator } from 'react-navigation-stack'
import Home from '../screens/Home';
import Review from '../screens/Review';

const screens = {
    Home: {
        screen: Home, 
        navigationOptions:{
            title: 'GameZone', 
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
        headerStyle: {backgroundColor: 'coral'}
    }
});

export default HomeStack;