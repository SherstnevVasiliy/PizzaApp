import React, {useCallback} from 'react';
import {FlatList, ListRenderItemInfo} from 'react-native';
import {PizzaListProps, PizzaModel} from '../../models/PizzaListModels';
import Item from '../common/Item/Item';

const PizzaList = ({pizzaList, clickHandler}: PizzaListProps) => {
    const renderItem = useCallback((item: ListRenderItemInfo<PizzaModel>) => (
        <Item
            item={item.item}
            clickHandler={clickHandler}
        />
    ), [clickHandler]);

    if (!pizzaList || !pizzaList.length) {
        return null;
    }

    return (
        <FlatList data={pizzaList} renderItem={renderItem} />
    );
};

export default PizzaList;
