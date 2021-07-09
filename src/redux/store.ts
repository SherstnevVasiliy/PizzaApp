import {createStore} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import rootReducer from './rootRedusers';

// это для работы с асинхронным кодом, так же можно выбрать redux-saga
// const middleWareConfig = () => [
//     {condition: true, middleware: ReduxThunk},
// ];

// const getMiddleware = (config = middleWareConfig()) => config.filter(el => el.condition).map(el => el.middleware);

export const store = createStore(
    rootReducer,
    composeWithDevTools(),
);

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
