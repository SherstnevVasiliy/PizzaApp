import React, {useCallback} from 'react';
import {FlatList, ListRenderItemInfo} from 'react-native';
import {PizzaListProps, PizzaModel} from '../../models/PizzaListModels';
import ProductItem from '../../common/ProductItem/ProductItem';

const PizzaList = ({pizzaList}: PizzaListProps) => {
    const renderItem = useCallback((item: ListRenderItemInfo<PizzaModel>) => (
        <ProductItem
            item={item.item}
        />
    ), []);

    if (!pizzaList || !pizzaList.length) {
        return null;
    }

    return (
        <FlatList data={pizzaList} renderItem={renderItem} />
    );
};

export default PizzaList;
