import React, {useCallback, useRef, useState} from "react";
import {
    Animated, Easing, Text, TouchableOpacity,
} from 'react-native';
import {ProductItemType} from '../models/ProductItemModels';

const AnimationItem = ({item}: {item: ProductItemType}) => {
    const {title, id} = item || {};
    const [isShow, setIsShow] = useState<boolean>(false);
    const animationState = {
        start: 0,
        end: 100,
    };

    const value = useRef(new Animated.Value(0)).current;

    const onPress = useCallback(() => {
        Animated.timing(value, {
            toValue: isShow ? animationState.start : animationState.end,
            useNativeDriver: false,
            duration: 1000,
            easing: isShow ? Easing.ease : Easing.bounce,
        }).start();
        setIsShow(!isShow);
    }, [value, animationState, isShow]);

    const inputRange = Object.values(animationState);
    const height = value.interpolate({inputRange, outputRange: [80, 150]});
    const backgroundColor = value.interpolate({inputRange, outputRange: ['orange', 'blue']});

    return (
        <TouchableOpacity key={id} onPress={onPress}>
            {/* eslint-disable-next-line react-native/no-inline-styles */}
            <Animated.View style={{
                height,
                backgroundColor,
                width: '100%',
                justifyContent: 'center',
                alignItems: 'center',
            }}
            >
                <Text style={{color: 'white', fontSize: 20}}>{title}</Text>
            </Animated.View>
        </TouchableOpacity>
    );
};

export default React.memo(AnimationItem);
