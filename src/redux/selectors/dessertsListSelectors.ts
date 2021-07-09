import {createSelector} from 'reselect';
import {DessertModel} from '../../models/DessertsListModels';

export const getDessertsSelector = createSelector((
    {dessertsList}: {dessertsList: {list: DessertModel[]}},
) => dessertsList.list, list => list);
