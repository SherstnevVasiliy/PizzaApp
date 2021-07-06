export interface PizzaModel {
    readonly id: string;
    readonly title: string;
    readonly price: string;
    readonly description: string;
    readonly img: string;

}

export interface PizzaProps {
    readonly item: PizzaModel;
    readonly clickHandler?: (title: string, count: number) => void;
}

export interface PizzaListProps {
    readonly pizzaList: PizzaModel[];
    readonly clickHandler?: (title: string, count: number) => void;
};
