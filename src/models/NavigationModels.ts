export interface NavigationParams {
    [key: string]: any;
}

export type ScreensType = 'PIZZA' | 'DESSERTS' | 'MAIN_APP' | 'CART_DETAILS';

export interface ScreenModel {
    [key: string]: ScreensType
}
