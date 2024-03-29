import React, {useCallback, useState} from 'react';
import {
    Alert,
    SafeAreaView,
    StyleSheet, Text, TouchableOpacity,
} from 'react-native';
import Header from './src/components/Header/Header';
import {PizzaModel} from './src/models/PizzaListModels';
import PizzaList from './src/components/PizzaList/PizzaList';


const PIZZA_DATA: PizzaModel[] = [
    {
        id: '1',
        title: 'Пицца из половинок',
        description: 'Соберите свою пиццу 35 см с двумя разными вкусами',
        price: '600 ₽',
        img: 'https://dodopizza-a.akamaihd.net/static/Img/Products/f556332ef96f44b0b556f1a88fcf690d_584x584.jpeg',
    },
    {
        id: '2',
        title: 'Чикен бомбони',
        description: 'Куриные кусочки, сладкий перец, смесь сыров чеддер и' +
            ' пармезан, моцарелла, красный лук, соус сладкий чили, соус альфредо',
        price: '445 ₽',
        img: 'https://dodopizza-a.akamaihd.net/static/Img/Products/d60ca9c065364cda960c1e1c8167e1dd_584x584.jpeg',
    },
    {
        id: '3',
        title: 'Колбаски Барбекю',
        description: 'Острая чоризо, соус барбекю, томаты, красный лук, моцарелла, томатный соус',
        price: '395',
        img: 'https://dodopizza-a.akamaihd.net/static/Img/Products/64a38569a93246108d8f8b0cefd72fab_584x584.jpeg',
    },
    {
        id: '4',
        title: 'Додо Микс',
        description: 'Бекон, цыпленок, ветчина, сыр блю чиз, сыры чеддер и пармезан,' +
            ' соус песто, кубики брынзы, томаты черри, красный лук, моцарелла,' +
            ' соус альфредо, чеснок, итальянские травы',
        price: '495 ₽',
        img: 'https://dodopizza-a.akamaihd.net/static/Img/Products/78e732c620334b5e8e5d821685c1c4b5_584x584.jpeg',
    },
    {
        id: '5',
        title: 'Гавайская',
        description: 'Ветчина, ананасы, моцарелла, томатный соус',
        price: '395 ₽',
        img: 'https://dodopizza-a.akamaihd.net/static/Img/Products/f80272ecb2a74d12b122b176d8cbe4f5_584x584.jpeg',
    },
];

const App = () => {
    const [cart, setCart] = useState({});
    const onPress = useCallback(() => Alert.alert('Заказ', `Вы заказали ${JSON.stringify(cart)}`), [cart]);
    const clickHandler = useCallback((title, count) => {
        setCart({
            ...cart,
            [title]: count,
        });
    }, [cart, setCart]);
    return (
        <SafeAreaView style={styles.appContainer}>
            <Header title="Pizza App"/>
            <PizzaList pizzaList={PIZZA_DATA} clickHandler={clickHandler}/>
            <TouchableOpacity style={styles.orderButtonWrapper} onPress={onPress}>
                <Text style={styles.orderButtonText}>
                    Заказать
                </Text>
            </TouchableOpacity>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    appContainer: {
        flex: 1,
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

export default App;
