export interface PizzaModel {
    readonly id: string;
    readonly title: string;
    readonly price: string;
    readonly description: string;
    readonly img: string;
    readonly category: string;
}

export interface PizzaListProps {
    readonly pizzaList: PizzaModel[];
};
