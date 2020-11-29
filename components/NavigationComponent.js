import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';

import React from 'react';

import HomeScreen from './HomeScreen';
import SpaceshipsScreen from './SpaceshipsScreen';

import Icon from 'react-native-vector-icons/FontAwesome';

const Drawer = createDrawerNavigator();


const NavigationComponent = () => (
    <NavigationContainer>
        <Drawer.Navigator initialRouteName="Home">
            <Drawer.Screen
                name="Home"
                component={HomeScreen}
                options={{ drawerIcon: () => (<Icon name="home" size={22} />) }}
            />
            <Drawer.Screen
                name="Spaceships"
                component={SpaceshipsScreen}
                options={{ drawerIcon: () => (<Icon name="space-shuttle" size={22} />) }}
            />
        </Drawer.Navigator>
    </NavigationContainer>
)

export default NavigationComponent;
