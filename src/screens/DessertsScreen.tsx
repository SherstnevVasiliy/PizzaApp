import React, {useCallback, useState} from 'react';
import {
    Alert, StyleSheet, Text, TouchableOpacity, View,
} from 'react-native';
import {useSelector} from 'react-redux';
import Header from '../components/Header/Header';
import DessertList from '../components/DessertsList/DessertList';
import {DessertModel} from '../models/DessertsListModels';
import {RootState} from '../redux/store';
import {getDessertsSelector} from '../redux/selectors/dessertsListSelectors';


const DessertsScreen = () => {
    const dessertsList: DessertModel[] = useSelector<RootState, DessertModel[]>(getDessertsSelector);
    const [cart, setCart] = useState({});
    const onPress = useCallback(() => Alert.alert('Заказ', `Вы заказали ${JSON.stringify(cart)}`), [cart]);
    const clickHandler = useCallback((title, count) => {
        setCart({
            ...cart,
            [title]: count,
        });
    }, [cart, setCart]);
    return (
        <View style={styles.wrapper}>
            <Header title="Pizza App"/>
            <DessertList dessertsList={dessertsList} clickHandler={clickHandler}/>
            <TouchableOpacity style={styles.orderButtonWrapper} onPress={onPress}>
                <Text style={styles.orderButtonText}>
                    Заказать
                </Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
        backgroundColor: '#FFF',
    },
    orderButtonWrapper: {
        display: 'flex',
        alignSelf: 'center',
        justifyContent: 'center',
        backgroundColor: 'orange',
        borderRadius: 4,
        height: 40,
        width: '80%',
    },
    orderButtonText: {
        fontSize: 16,
        fontWeight: '400',
        textAlign: 'center',
        color: '#FFF',
    },
});

export default React.memo(DessertsScreen);
