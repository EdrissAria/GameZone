import { StyleSheet } from "react-native";
import {MaterialIcons} from '@expo/vector-icons'
import { Text } from "react-native";

export const globalStyle = StyleSheet.create({
    container: {
        padding: 30
    },
    titleText: {
        fontSize: 18
    }, 
    input: {
        paddingHorizontal: 16, 
        paddingVertical: 10, 
        borderColor: '#ddd', 
        borderWidth: 1, 
        borderRadius: 4,
        fontSize: 18,  
    },
    errorText:{
        textAlign: 'center', 
        color: 'red'
    }
}) 

export const ratingCount = (rate) =>{
    switch(parseInt(rate)){
        case 1: 
        return <MaterialIcons color='rgb(255, 238, 4)' name='star' size={22} />; 
        break;
        case 2: 
        return(
            <Text>
            <MaterialIcons color='rgb(255, 238, 4)' name='star' size={22} />
            <MaterialIcons color='rgb(255, 238, 4)' name='star' size={22} />
            </Text>
            ); 
        break;
        case 3: 
        return(
            <Text>
            <MaterialIcons color='rgb(255, 238, 4)' name='star' size={22} />
            <MaterialIcons color='rgb(255, 238, 4)' name='star' size={22} />
            <MaterialIcons color='rgb(255, 238, 4)' name='star' size={22} />
            </Text>
            );  
        break;
        case 4: 
        return(
            <Text>
            <MaterialIcons color='rgb(255, 238, 4)' name='star' size={22} />
            <MaterialIcons color='rgb(255, 238, 4)' name='star' size={22} />
            <MaterialIcons color='rgb(255, 238, 4)' name='star' size={22} />
            <MaterialIcons color='rgb(255, 238, 4)' name='star' size={22} />
            </Text>
            );  
        break;
        case 5: 
        return(
            <Text>
            <MaterialIcons color='rgb(255, 238, 4)' name='star' size={22} />
            <MaterialIcons color='rgb(255, 238, 4)' name='star' size={22} />
            <MaterialIcons color='rgb(255, 238, 4)' name='star' size={22} />
            <MaterialIcons color='rgb(255, 238, 4)' name='star' size={22} />
            <MaterialIcons color='rgb(255, 238, 4)' name='star' size={22} />
            </Text>
            ); 
        break;
    }
}