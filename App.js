import React, {useState, useEffect} from "react";
import Home from "./screens/Home";
import { global } from "./styles/global";
import * as Font from 'expo-font'
import Navigator from './routes/Drawer'

export default function App() {
    useEffect(() => {
        Font.loadAsync({
          'roboto-regular': require('./assets/fonts/Roboto-Regular.ttf'),
          'roboto-bold': require('./assets/fonts/Roboto-Bold.ttf')
        })
    }, []); 
    return (
      <Navigator />
    );
}