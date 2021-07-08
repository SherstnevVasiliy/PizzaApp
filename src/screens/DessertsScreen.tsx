import React, {useCallback, useState} from 'react';
import {
    Alert, StyleSheet, Text, TouchableOpacity, View,
} from 'react-native';
import {DessertModel} from '../models/DessertsListModels';
import Header from '../components/Header/Header';
import DessertList from '../components/DessertsList/DessertList';

const DESERTS_DATA: DessertModel[] = [
    {
        id: '1',
        title: 'Смородиновый молочный коктейль',
        description: 'Напиток на основе молока и пломбира с замороженными ягодами черной смородины',
        price: '159 ₽',
        img: 'https://dodopizza-a.akamaihd.net/static/Img/Products/1e74fb971fe34337a87ef5358b0df0dc_584x584.jpeg',
    },
    {
        id: '2',
        title: 'Молочный коктейль с печеньем Орео',
        description: 'КНапиток из молока и мороженого с добавлением дробленого печенья «Орео»',
        price: '179 ₽',
        img: 'https://dodopizza-a.akamaihd.net/static/Img/Products/86fe757e450745b295c8b1645efc2a3f_584x584.jpeg',
    },
    {
        id: '3',
        title: 'Классический молочный коктейль',
        description: 'Напиток из молока и мороженого',
        price: '159 ₽',
        img: 'https://dodopizza-a.akamaihd.net/static/Img/Products/f08ef3e758024f378031e8f796480005_584x584.jpeg',
    },
    {
        id: '4',
        title: 'Клубничный молочный коктейль',
        description: 'Напиток из молока и мороженого с клубничным сиропом',
        price: '159 ₽',
        img: 'https://dodopizza-a.akamaihd.net/static/Img/Products/478229ad9cfd4e9aa203aa3d0e022bce_584x584.jpeg',
    },
    {
        id: '5',
        title: 'Айс Капучино',
        description: 'Бодрящий напиток из мороженого, двойного эспрессо, с шоколадным сиропом',
        price: '159 ₽',
        img: 'https://dodopizza-a.akamaihd.net/static/Img/Products/4441a2d30c9c48d3a1ac172fac93ac2d_584x584.jpeg',
    },
];

const DessertsScreen = () => {
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
            <DessertList dessertsList={DESERTS_DATA} clickHandler={clickHandler}/>
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
