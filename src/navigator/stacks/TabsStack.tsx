import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {screens} from '../const/screens';
import {Tabs} from '../tabs/Tabs';

const Stack = createStackNavigator();

const TabsStack = (
    <>
        <Stack.Screen name={screens.MAIN_APP} component={Tabs} />
    </>
);

export default TabsStack;
