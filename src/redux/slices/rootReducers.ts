import {combineReducers} from 'redux';
import cartReducer from './cartSlice';
import pizzaListReducer from './PizzaSlice';

const rootReducer = combineReducers({
    cart: cartReducer,
    pizzaList: pizzaListReducer,
});

export default rootReducer;
