import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';

import TabsStack from './stacks/TabsStack';
import Navigation from '../base/Navigation';

const Stack = createStackNavigator();

export const Navigator = () => (
    <NavigationContainer ref={Navigation.navigationRef}>
        <Stack.Navigator screenOptions={{headerShown: false}}>
            {TabsStack}
        </Stack.Navigator>
    </NavigationContainer>
);
