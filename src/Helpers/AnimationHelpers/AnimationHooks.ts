import {useCallback, useRef, useState} from 'react';
import {Animated, Easing} from 'react-native';

export const useAnimatedItemStyle = () => {
    const [isShow, setIsShow] = useState<boolean>(false);
    const animateState: {start: number, end: number} = {
        start: 0,
        end: 100,
    };
    const value = useRef(new Animated.Value(animateState.start)).current;

    const onPress = useCallback(() => {
        Animated.timing(value, {
            toValue: isShow ? animateState.start : animateState.end,
            useNativeDriver: false,
            duration: 1000,
            easing: isShow ? Easing.ease : Easing.bounce,
        }).start();
        setIsShow(!isShow);
    }, [value, isShow, animateState]);
    const inputRange = Object.values(animateState);
    const height = value.interpolate({ inputRange, outputRange: [80, 150] });
    const backgroundColor = value.interpolate({ inputRange, outputRange: ['#fc7d28', '#ffa366'] });

    return {
        height, backgroundColor, onPress, value,
    };
};
