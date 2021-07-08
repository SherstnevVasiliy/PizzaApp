import {PizzaModel} from './PizzaListModels';
import {DessertModel} from './DessertsListModels';

export type ProductItemType = PizzaModel | DessertModel;

export interface ProductItemProps {
    item: ProductItemType;
    clickHandler: (title: string, count: number) => void;
}
