import {createSelector} from 'reselect';


export const getPizzaList = createSelector(({pizzaList}) => pizzaList.list, list => list);
