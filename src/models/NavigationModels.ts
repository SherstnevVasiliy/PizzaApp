export interface NavigationParams {
    [key: string]: any;
}

export type ScreensType = 'PIZZA' | 'DESSERTS' | 'MAIN_APP' | 'CART_DETAILS' | 'MAP_SCREEN';

export interface ScreenModel {
    [key: string]: ScreensType
}
