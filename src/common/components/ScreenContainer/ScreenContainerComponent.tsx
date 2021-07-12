import React, {ReactChild, ReactChildren, useCallback} from 'react';
import {
    StyleSheet, Text, TouchableOpacity, View,
} from 'react-native';
import {useNavigation} from '@react-navigation/core';
import Header from '../../../components/Header/Header';
import {screens} from '../../../navigator/const/screens';

interface ScreenComponentProps {
    children: ReactChild | ReactChildren;
    isVisibleBackButton?: boolean;
    title?: string;
}

const ScreenComponent = ({children, isVisibleBackButton = true, title = 'Pizza App'}: ScreenComponentProps) => (
    <View style={styles.wrapper}>
        <Header title={title} isVisibleBackButton={isVisibleBackButton}/>
        {children}
    </View>
);

const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
        backgroundColor: '#FFF',
        paddingHorizontal: 16,
    },
});

export default React.memo(ScreenComponent);
