import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {screens} from '../const/screens';
import {Tabs} from '../tabs/Tabs';
import CartDetailsScreen from '../../screens/CartDetailsScreen';
import MapScreen from "../../screens/MapScreen";

const Stack = createStackNavigator();

const TabsStack = (
    <>
        <Stack.Screen name={screens.MAIN_APP} component={Tabs} />
        <Stack.Screen name={screens.CART_DETAILS} component={CartDetailsScreen} />
        <Stack.Screen name={screens.MAP_SCREEN} component={MapScreen} />
    </>
);

export default TabsStack;
