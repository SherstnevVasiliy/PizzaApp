import {PizzaModel} from '../PizzaListModels';
import {DessertModel} from '../DessertsListModels';

export interface PizzaListSliceModels {
    list: ProductsType[];
}

export interface Product {
    product: ProductsType,
    count: number,
}

export type ProductsType = PizzaModel | DessertModel;
