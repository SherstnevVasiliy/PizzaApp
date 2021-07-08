export interface DessertModel {
    readonly id: string;
    readonly title: string;
    readonly price: string;
    readonly description: string;
    readonly img: string;

}

export interface DessertProps {
    readonly item: DessertModel;
    readonly clickHandler?: (title: string, count: number) => void;
}

export interface DessertsListProps {
    readonly dessertsList: DessertModel[];
    readonly clickHandler?: (title: string, count: number) => void;
};
