import {combineReducers} from 'redux';
import cartReducer from './slices/cartSlice';
import pizzaListReducer from './slices/pizzaListSlice';
import dessertsListReducer from './slices/dessertsListSlice';


const rootReducer = combineReducers({
    cart: cartReducer,
    pizzaList: pizzaListReducer,
    dessertsList: dessertsListReducer,
});

export default rootReducer;
