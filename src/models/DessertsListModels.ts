import {PizzaModel} from "./PizzaListModels";

export interface DessertModel {
    readonly id: string;
    readonly title: string;
    readonly price: string;
    readonly description: string;
    readonly img: string;

}

export interface DesertProps {
    readonly item: DessertModel;
    readonly clickHandler?: (title: string, count: number) => void;
}

export interface DesertsListProps {
    readonly dessertsList: DessertModel[];
    readonly clickHandler?: (title: string, count: number) => void;
};
