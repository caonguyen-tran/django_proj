import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import myStyle from './Styles/myStyle';
import Home from './components/Home/Home';
import Login from './components/User/Login';

const Drawer = createDrawerNavigator()
export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen name="Home" component={Home}/>
        <Drawer.Screen name="Login" component={Login}/>
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

