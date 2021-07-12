import React, {useCallback, useState} from 'react';
import {useSelector} from 'react-redux';
import DessertList from '../components/DessertsList/DessertList';
import {DessertModel} from '../models/DessertsListModels';
import {RootState} from '../redux/store';
import {getDessertsSelector} from '../redux/selectors/dessertsListSelectors';
import ScreenComponent from '../common/components/ScreenContainer/ScreenContainerComponent';


const DessertsScreen = () => {
    const dessertsList: DessertModel[] = useSelector<RootState, DessertModel[]>(getDessertsSelector);
    const [cart, setCart] = useState({});
    const clickHandler = useCallback((title, count) => {
        setCart({
            ...cart,
            [title]: count,
        });
    }, [cart, setCart]);
    return (
        <ScreenComponent>
            <DessertList dessertsList={dessertsList} clickHandler={clickHandler}/>
        </ScreenComponent>
    );
};


export default React.memo(DessertsScreen);
