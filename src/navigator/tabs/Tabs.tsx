import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Navigator from '../../base/Navigation';
import {screens} from '../const/screens';
import PizzaScreen from '../../screens/PizzaScreen';
import DessertsScreen from '../../screens/DessertsScreen';
import PizzaTabIcon from '../../assets/icons/PizzaTabIcon';
import DessertsTabIcon from '../../assets/icons/DessertsTabIcon';
import CartDetailsScreen from "../../screens/CartDetailsScreen";

const Tab = createBottomTabNavigator();

export const Tabs = () => (
    <Tab.Navigator
        tabBarOptions={{
            style: {
                paddingTop: 24,
            },
        }}
        initialRouteName={Navigator.initialRoute}
    >
        <Tab.Screen
            name={screens.PIZZA}
            component={PizzaScreen}
            /* eslint-disable-next-line react/jsx-no-bind */
            options={() => ({
                tabBarLabel: '',
                tabBarIcon:
                    ({focused}) => (focused ? (<PizzaTabIcon color="orange"/>) : (<PizzaTabIcon color="grey"/>)),
            })}
        />

        <Tab.Screen
            name={screens.DESSERTS}
            component={DessertsScreen}
            /* eslint-disable-next-line react/jsx-no-bind */
            options={() => ({
                tabBarLabel: '',
                tabBarIcon:
                    ({focused}) => (focused ? (<DessertsTabIcon color="orange"/>) : (<DessertsTabIcon color="grey"/>)),
            })}
        />
    </Tab.Navigator>
);
