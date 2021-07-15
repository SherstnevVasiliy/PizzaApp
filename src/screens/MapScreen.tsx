import React from 'react';
import {
    Platform, StyleSheet, Text,
} from 'react-native';
import {PROVIDER_DEFAULT, PROVIDER_GOOGLE} from 'react-native-maps';
import ScreenComponent from '../common/components/ScreenContainer/ScreenContainerComponent';

const PROVIDER = Platform.OS === 'android' ? PROVIDER_GOOGLE : PROVIDER_DEFAULT;


const MapScreen = () => {
    return (
        <ScreenComponent title="Карта">
            <Text>Google Map</Text>
        </ScreenComponent>
    );
};

const styles = StyleSheet.create({
    map: {
        flex: 1,
    },
    loader: {
        flex: 1,
    },
});

export default React.memo(MapScreen);
