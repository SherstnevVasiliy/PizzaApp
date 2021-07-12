import React, {useCallback} from 'react';
import {
    StyleSheet, Text, TouchableOpacity, View,
} from 'react-native';
import {useNavigation} from '@react-navigation/core';
import {HeaderProps} from '../../models/HeaderModels';
import BackIcon from '../../assets/icons/BackIcon';
import CartIcon from '../../assets/icons/CartIcon';
import {screens} from '../../navigator/const/screens';

const Header = ({title, isVisibleBackButton}: HeaderProps) => {
    const navigation = useNavigation();
    const onPresBackButton = useCallback(() => navigation.goBack(), [navigation]);
    const onPresCartButton = useCallback(() => navigation.navigate(screens.CART_DETAILS), [navigation]);

    return (
        <View style={styles.headerContainer}>
            <View style={styles.titleContainer}>
                <Text style={styles.title}>{title}</Text>
            </View>
            <View style={styles.buttonContainer}>
                <View>
                    {isVisibleBackButton && (
                        <TouchableOpacity style={styles.backIcon} onPress={onPresBackButton}>
                            <BackIcon color="orange" />
                        </TouchableOpacity>
                    )}
                </View>
                <View>
                    <TouchableOpacity style={styles.cartIcon} onPress={onPresCartButton}>
                        <CartIcon color="orange" />
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    headerContainer: {
        marginVertical: 6,
    },
    buttonContainer: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    backIcon: {
    },
    cartIcon: {
    },
    titleContainer: {
        alignSelf: 'center',
    },
    title: {
        fontSize: 24,
        color: 'grey',
        textAlign: 'center',
    },
});

export default React.memo(Header);
