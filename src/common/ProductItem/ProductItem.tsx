import React from 'react';
import {
    Image, StyleSheet, Text, View,
} from 'react-native';
import Counter from '../Counter/Counter';
import {ProductItemProps} from '../../models/ProductItemModels';

const ProductItem = ({
    item,
}: ProductItemProps) => {
    const {
        title, price, img, description,
    } = item || {};

    return (
        <View style={styles.pizzaWrapper}>
            <View style={styles.priceContainer}>
                <Text style={styles.price}>{price}</Text>
                <Image source={{uri: img}} style={styles.img}/>
                <Counter item={item}/>
            </View>
            <View style={styles.descriptionContainer}>
                <Text style={styles.title}>{title}</Text>
                <Text style={styles.description}>{description}</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    pizzaWrapper: {
        display: 'flex',
        alignItems: 'center',
    },
    priceContainer: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
    },
    descriptionContainer: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 16,
        paddingBottom: 16,
    },
    img: {
        width: 200,
        height: 200,
    },
    title: {
        alignSelf: 'flex-start',
        fontSize: 16,
    },
    description: {
        fontSize: 12,
        color: 'grey',
        paddingVertical: 8,
    },
    price: {
        fontSize: 20,
        fontWeight: '600',
        paddingRight: 24,
    },
});

export default React.memo(ProductItem);
