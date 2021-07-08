import React, {useCallback} from 'react';
import {FlatList, ListRenderItemInfo} from 'react-native';
import {PizzaModel} from '../../models/PizzaListModels';
import Item from '../common/Item/Item';
import {DesertsListProps} from '../../models/DessertsListModels';

const DessertsList = ({dessertsList, clickHandler}: DesertsListProps) => {
    const renderItem = useCallback((item: ListRenderItemInfo<PizzaModel>) => (
        <Item
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

export default React.memo(DessertsList);
