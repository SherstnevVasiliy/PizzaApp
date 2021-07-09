import React, {useCallback, useState} from 'react';
import {
    TouchableOpacity, View, Text, StyleSheet,
} from 'react-native';
import {useDispatch} from 'react-redux';
import {CounterProps} from '../../models/CounterModels';
import AddIcon from '../../assets/images/AddIcon';
import RemoveIcon from '../../assets/images/RemoveIcon';
import { addItem } from '../../redux/slices/cartSlice';

const Counter = ({item}: CounterProps) => {
    const dispatch = useDispatch();
    const [currentCount, setCurrentCount] = useState(0);

    const onPressAddItem = useCallback(() => {
        setCurrentCount(prevValue => prevValue + 1);
        dispatch(addItem(item));
    }, [dispatch, setCurrentCount, item]);

    const onPressRemoveItem = useCallback(() => {
        if (currentCount > 0) {
            setCurrentCount(prevValue => prevValue - 1);
            // dispatch(removeItem(item));
        }
    }, [setCurrentCount, currentCount]);

    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={onPressAddItem}>
                <AddIcon color="green"/>
            </TouchableOpacity>
            <Text style={styles.count}>{currentCount}</Text>
            <TouchableOpacity onPress={onPressRemoveItem}>
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
