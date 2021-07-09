import React, {useCallback, useState} from 'react';
import {
    StyleSheet, Text, TouchableOpacity, View,
} from 'react-native';
import {useNavigation} from '@react-navigation/core';
import {useSelector} from 'react-redux';
import Header from '../components/Header/Header';
import PizzaList from '../components/PizzaList/PizzaList';
import {screens} from '../navigator/const/screens';
import {PizzaModel} from '../models/PizzaListModels';
import {RootState} from '../redux/store';
import {getPizzaSelector} from '../redux/selectors/pizzaListSelectors';


const PizzaScreen = () => {
    const pizzaList: PizzaModel[] = useSelector<RootState, PizzaModel[] >(getPizzaSelector);
    const navigate = useNavigation();
    const onPress = useCallback(() => navigate.navigate(screens.DESSERTS), [navigate]);
    return (
        <View style={styles.wrapper}>
            <Header title="Pizza App"/>
            <PizzaList pizzaList={pizzaList}/>
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

export default React.memo(PizzaScreen);
