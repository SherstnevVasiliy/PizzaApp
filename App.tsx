import React, {useEffect} from 'react';
import {
    SafeAreaView,
    StyleSheet,
} from 'react-native';
import RNBootSplash from 'react-native-bootsplash';
import {Navigator} from './src/navigator/Navigator';


const App = () => {
    useEffect(() => {
        RNBootSplash.hide().then();
    }, []);
    return (
        <SafeAreaView style={styles.appContainer}>
            <Navigator />
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    appContainer: {
        flex: 1,
    },
});

export default App;
