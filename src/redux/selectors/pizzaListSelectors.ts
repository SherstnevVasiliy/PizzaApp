import {createSelector} from 'reselect';
import {PizzaModel} from '../../models/PizzaListModels';

export const getPizzaSelector = createSelector((
    {pizzaList}: {pizzaList: {list: PizzaModel[]}},
) => pizzaList.list, list => list);
