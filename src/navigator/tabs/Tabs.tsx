import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {screens} from '../consts/screens';
import Navigation from '../../base/Navigation';
import DessertsIcon from '../../assets/TabIcons/DessertsIcon';
import DessertsScreen from '../../screens/DesertsScreen';
import PizzaIcon from '../../assets/TabIcons/PizzaIcon';
import PizzaScreen from '../../screens/PizzaScreen';


const Tab = createBottomTabNavigator();


export const Tabs = () => (
    <Tab.Navigator initialRouteName={Navigation.initialRoute}>
        <Tab.Screen
            name={screens.PIZZA}
            component={PizzaScreen}
            /* eslint-disable-next-line react/jsx-no-bind */
            options={({route}: any) => ({
                tabBarLabel: 'Пиццы',
                tabBarIcon: ({focused}) => (
                    <PizzaIcon color={focused ? 'orange' : 'gray'} />
                ),
            })}
        />

        <Tab.Screen
            name={screens.DESSERTS}
            component={DessertsScreen}
            /* eslint-disable-next-line react/jsx-no-bind */
            options={({route}: any) => ({
                tabBarLabel: 'Десерты',
                tabBarIcon: ({focused}) => (
                    <DessertsIcon color={focused ? 'orange' : 'gray'} />
                ),
            })}
        />
    </Tab.Navigator>
);
