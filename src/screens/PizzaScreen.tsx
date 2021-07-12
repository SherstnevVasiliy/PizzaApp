import React from 'react';
import {useSelector} from 'react-redux';
import PizzaList from '../components/PizzaList/PizzaList';
import {PizzaModel} from '../models/PizzaListModels';
import {RootState} from '../redux/store';
import {getPizzaSelector} from '../redux/selectors/pizzaListSelectors';
import ScreenComponent from '../common/components/ScreenContainer/ScreenContainerComponent';


const PizzaScreen = () => {
    const pizzaList: PizzaModel[] = useSelector<RootState, PizzaModel[] >(getPizzaSelector);

    return (
        <ScreenComponent isVisibleBackButton={false}>
            <PizzaList pizzaList={pizzaList}/>
        </ScreenComponent>
    );
};

export default React.memo(PizzaScreen);
