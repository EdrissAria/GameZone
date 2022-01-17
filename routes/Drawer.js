import { createDrawerNavigator } from 'react-navigation-drawer'
import { createAppContainer } from 'react-navigation'
import { Dimensions } from 'react-native'
import { Feather } from '@expo/vector-icons'

import HomeStack from './HomeStack'
import AboutStack from './AboutStack'
import Slide from '../components/Slide'


const RootDrawerNavigator = createDrawerNavigator({
    Home:{
        screen: HomeStack, 
        navigationOptions: {
            drawerIcon: ({tintColor}) => <Feather name="home" size={16} color={tintColor} />
        }
    },
    About:{
        screen: AboutStack, 
        navigationOptions: {
            drawerIcon: ({tintColor}) => <Feather name="user" size={16} color={tintColor} />
        }
    }
},{
    contentComponent: props => <Slide {...props} />,
    drawerWidth: Dimensions.get('window').width * 0.82,
    contentOptions: {
        activeBackgroundColor: 'rgba(230, 130, 220, 0.4)',
        activeTintColor: '#ee55ee', 
        itemsContainerStyle:{
            paddingTop: 0, 
        },  
    } 

})

export default createAppContainer(RootDrawerNavigator);

