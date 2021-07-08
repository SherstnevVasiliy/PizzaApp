import React from 'react';
import {
    StyleSheet, Text, TouchableOpacity, View,
} from 'react-native';
import {useNavigation} from '@react-navigation/core';
import {HeaderProps} from '../../models/HeaderModels';
import CartIcon from '../../assets/SVGComponents/CartIcon';
import BackIcon from '../../assets/SVGComponents/BackIcon';

const Header = ({title, isVisibleBackButton = true}: HeaderProps) => {
    const navigate = useNavigation();
    return (
        <View style={styles.headerContainer}>
            <View>
                {isVisibleBackButton && (
                    <TouchableOpacity onPress={() => navigate.goBack()}>
                        <BackIcon color="orange"/>
                    </TouchableOpacity>
                )}
            </View>
            <View>
                <Text style={styles.title}>{title}</Text>
            </View>
            <View>
                <TouchableOpacity>
                    <CartIcon color="orange"/>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    headerContainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginHorizontal: 16,
    },
    title: {
        fontSize: 24,
        color: 'grey',
        marginVertical: 12,
    },
});

export default React.memo(Header);
