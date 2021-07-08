import React from 'react';
import {NavigationContainerRef} from '@react-navigation/core';
import {NavigationParams, ScreensType} from '../models/NavigationModels';
import {screens} from '../navigator/consts/screens';

class NavigationC {
    navigationRef = React.createRef<NavigationContainerRef>();

    initialRoute = screens.MAIN_APP;

    setInitialRoute = (route: ScreensType) => {
        this.initialRoute = route;
    };

    navigate = (routeName: string, params?: NavigationParams) => {
        setTimeout(
            () => this.navigationRef.current?.navigate(routeName, params),
            0,
        );
    };

    replace = (routeName: string, params?: NavigationParams) => {
        setTimeout(
            () => this.navigationRef.current?.reset({
                index: 0,
                routes: [{name: routeName, params}],
            }),
            0,
        );
    };

    pop = () => {
        this.navigationRef.current?.goBack();
    };

    goBackDouble = () => {
        this.pop();
        this.pop();
    };
}

const Navigation = new NavigationC();
export default Navigation;
