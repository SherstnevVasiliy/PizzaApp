export interface NavigationParams {
    [key: string]: any;
}

export type ScreensType = 'PIZZA' | 'DESSERTS' | 'MAIN_APP';

export interface ScreensModel {
    [key: string]: ScreensType;
}
