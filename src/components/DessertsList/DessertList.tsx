import React, {useCallback} from 'react';
import {FlatList, ListRenderItemInfo} from 'react-native';
import {PizzaModel} from '../../models/PizzaListModels';
import ProductItem from '../common/ProductItem/ProductItem';
import {DessertsListProps} from '../../models/DessertsListModels';

const DessertList = ({dessertsList, clickHandler}: DessertsListProps) => {
    const renderItem = useCallback((item: ListRenderItemInfo<PizzaModel>) => (
        <ProductItem
            item={item.item}
            clickHandler={clickHandler}
        />
    ), [clickHandler]);

    if (!dessertsList || !dessertsList.length) {
        return null;
    }

    return (
        <FlatList data={dessertsList} renderItem={renderItem} />
    );
};

export default DessertList;