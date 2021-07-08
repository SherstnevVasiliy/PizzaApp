import {PizzaModel} from "./PizzaListModels";

export interface DesertModel {
    readonly id: string;
    readonly title: string;
    readonly price: string;
    readonly description: string;
    readonly img: string;

}

export interface DesertProps {
    readonly item: DesertModel;
    readonly clickHandler?: (title: string, count: number) => void;
}

export interface DesertsListProps {
    readonly dessertsList: DesertModel[];
    readonly clickHandler?: (title: string, count: number) => void;
};
