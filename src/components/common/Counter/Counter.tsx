import React, {useCallback, useState} from 'react';
import {
    TouchableOpacity, View, Text, StyleSheet,
} from 'react-native';
import {CounterProps} from '../../../models/CounterModels';
import AddIcon from '../../../assets/images/AddIcon';
import RemoveIcon from '../../../assets/images/RemoveIcon';

const Counter = ({clickHandler}: CounterProps) => {
    const [currentCount, setCurrentCount] = useState(0);
    const onIncrement = useCallback(() => {
        setCurrentCount(prevValue => prevValue + 1);
        if (clickHandler) {
            clickHandler(currentCount + 1);
        }
    }, [setCurrentCount, clickHandler, currentCount]);
    const onDecrement = useCallback(() => {
        if (currentCount > 0) {
            setCurrentCount(prevValue => prevValue - 1);
            if (clickHandler) {
                clickHandler(currentCount - 1);
            }
        }
    }, [setCurrentCount, clickHandler, currentCount]);

    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={onIncrement}>
                <AddIcon color="green"/>
            </TouchableOpacity>
            <Text style={styles.count}>{currentCount}</Text>
            <TouchableOpacity onPress={onDecrement}>
                <RemoveIcon color="red"/>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        paddingLeft: 16,
    },
    count: {
        marginVertical: 16,
        fontSize: 32,
    },
});

export default React.memo(Counter);
