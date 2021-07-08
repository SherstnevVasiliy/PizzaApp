import {applyMiddleware, createStore} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import ReduxThunk from 'redux-thunk';
import rootReducer from './slices/rootReducers';


const middlewareConfig = () => [
    { condition: true, middleware: ReduxThunk },
];

export const getMiddleware = (config = middlewareConfig()) => (
    config.filter(el => el.condition).map(el => el.middleware)
);

export const store = createStore(
    rootReducer,
    composeWithDevTools(
        applyMiddleware(...getMiddleware()),
    ),
);

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
