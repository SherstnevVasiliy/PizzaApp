import React from 'react';
import {
    Animated, StyleSheet, Text, TouchableOpacity, UIManager,
} from 'react-native';
import {AnimateItemProps} from '../../../models/AnimateItemModels';
import {useAnimatedItemStyle} from '../../../Helpers/AnimationHelpers/AnimationHooks';

const AnimateItem = ({item}: AnimateItemProps) => {
    const {id, title, price} = item || {};
    const {
        height, backgroundColor, onPress, value,
    } = useAnimatedItemStyle();

    const inputRange = [0, 100];


    const opacity = value.interpolate({ inputRange, outputRange: [0, 1] });
    const height2 = value.interpolate({ inputRange, outputRange: [0, 18] });

    return (
        <TouchableOpacity key={id} onPress={onPress}>
            {/* eslint-disable-next-line react-native/no-inline-styles */}
            <Animated.View style={{
                height,
                width: '100%',
                justifyContent: 'center',
                backgroundColor,
                alignItems: 'center',
            }}
            >
                <Text style={styles.titleItem}>{title}</Text>

                {/* eslint-disable-next-line react-native/no-inline-styles */}
                <Animated.View style={{
                    opacity,
                    height: height2,
                    justifyContent: 'center',
                    backgroundColor,
                    alignItems: 'center',
                }}
                >
                    <Text>{`цена: ${price}`}</Text>
                </Animated.View>
            </Animated.View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    titleItem: {
        color: 'white',
        fontSize: 18,
    },
});

export default React.memo(AnimateItem);
