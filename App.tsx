import React, {useEffect} from 'react';
import {
    SafeAreaView,
    StyleSheet,
} from 'react-native';
import RNBootSplash from 'react-native-bootsplash';
import {Provider} from 'react-redux';
import {Navigator} from './src/navigator/Navigator';
import {store} from './src/redux/store';


const App = () => {
    useEffect(() => {
        RNBootSplash.hide().then();
    }, []);
    return (
        <Provider store={store}>
            <SafeAreaView style={styles.appContainer}>
                <Navigator />
            </SafeAreaView>
        </Provider>
    );
};

const styles = StyleSheet.create({
    appContainer: {
        flex: 1,
    },
});

export default App;
