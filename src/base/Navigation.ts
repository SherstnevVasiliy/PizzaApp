import React from 'react';
import {NavigationContainerRef} from '@react-navigation/core';
import {screens} from '../navigator/const/screens';
import {NavigationParams, ScreensType} from '../models/NavigationModels';

class NavigationC {
    navigationRef = React.createRef<NavigationContainerRef>();

    initialRoute = screens.MAIN_APP;

    navigate = (routeName: ScreensType, params?: NavigationParams) => {
        setTimeout(
            () => this.navigationRef.current?.navigate(routeName, params),
            0,
        );
    }

    replace = (routeName: ScreensType, params?: NavigationParams) => {
        setTimeout(
            () => this.navigationRef.current?.reset({
                index: 0,
                routes: [{name: routeName, params}],
            }), 0,
        );
    }

    pop = () => {
        this.navigationRef.current?.goBack();
    }

    pop2 = () => {
        this.navigationRef.current?.goBack();
        this.navigationRef.current?.goBack();
    }
}

const Navigation = new NavigationC();
export default Navigation;
