export interface DessertModel {
    readonly id: string;
    readonly title: string;
    readonly price: string;
    readonly description: string;
    readonly img: string;
    readonly category: string;

}

export interface DessertsListProps {
    readonly dessertsList: DessertModel[];
    readonly clickHandler?: (title: string, count: number) => void;
};
