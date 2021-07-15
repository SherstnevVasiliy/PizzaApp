import React, {useCallback, useRef, useState} from 'react';
import MapView from 'react-native-maps';

import {
    Animated, Button, Easing,
    ScrollView, Text, TouchableOpacity,
    NativeModules, View, StyleSheet,
} from 'react-native';
import {useSelector} from 'react-redux';
import ScreenComponent from '../common/components/ScreenContainer/ScreenContainerComponent';
import TrolleyIcon from '../assets/icons/TrolleyIcon';
import {RootState} from '../redux/store';
import {ProductItemType} from '../models/ProductItemModels';
import AnimateItem from '../components/DessertsList/AnimateItem/AnimateItem';
import {useNavigation} from "@react-navigation/core";
import {screens} from "../navigator/const/screens";


const CartDetailsScreen = () => {
    const navigate = useNavigation();
    const value = useRef(new Animated.Value(0)).current;
    const [batteryLevel, setBatteryLevel] = useState(0);
    const animatedState = {
        start: 0,
        end: 400,
    };
    const onPressStart = useCallback(() => {
        Animated.timing(value, {
            toValue: animatedState.end, useNativeDriver: false, duration: 1500, easing: Easing.ease,
        }).start();
    }, [value, animatedState]);
    const onPressRefresh = useCallback(() => {
        value.setValue(0);
    }, [value]);
    const onPressCheckBatteryLevel = useCallback(() => {
        NativeModules.BatteryLevel.getLevel((batteryLevel: number) => {
            setBatteryLevel(batteryLevel);
        });
    }, []);

    const onPressNativeLogger = useCallback(() => {
        NativeModules.NativeLogger.logObject('Hello World!', (log: string) => {
            console.log(log);
        });
    }, []);
    const inputRange = [animatedState.start, animatedState.end];
    const translateX = value.interpolate({inputRange, outputRange: [animatedState.start, animatedState.end]});
    const opacity = value.interpolate({inputRange, outputRange: [1, 0.1]});
    const cartItems = useSelector<RootState, ProductItemType[]>(state => state.cart.items);

    return (
        <ScreenComponent title="Корзина">
            <ScrollView showsVerticalScrollIndicator={false}>
                <Text>Cart details screen</Text>
                {/* eslint-disable-next-line react-native/no-inline-styles */}
                <Animated.View style={{
                    transform: [{translateX}],
                    opacity,
                    height: 200,
                    width: 200,
                    justifyContent: 'center',
                }}
                >
                    <TouchableOpacity onPress={onPressStart}>
                        <TrolleyIcon />
                    </TouchableOpacity>
                </Animated.View>

                {cartItems?.map(item => (
                    <AnimateItem key={item.id} item={item} />
                ))}
                <Button title="refresh" onPress={onPressRefresh} />


                <Button title="checkBatteryLevel" onPress={onPressCheckBatteryLevel} />
                <Text>{batteryLevel}</Text>

                <Button title="NativeLogger" onPress={onPressNativeLogger} />
                <Button title="Go To Map Screen" onPress={() => navigate.navigate(screens.MAP_SCREEN)} />
            </ScrollView>
        </ScreenComponent>
    );
};

const styles = StyleSheet.create({
    mapContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'orange',
    },
    map: {
        flex: 1,
    },
});

export default React.memo(CartDetailsScreen);
