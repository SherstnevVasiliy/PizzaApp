import {createSlice} from '@reduxjs/toolkit';
import {DessertModel} from '../../models/DessertsListModels';

export const DESERTS_DATA: DessertModel[] = [
    {
        id: '6',
        title: 'Смородиновый молочный коктейль',
        description: 'Напиток на основе молока и пломбира с замороженными ягодами черной смородины',
        price: '159 ₽',
        img: 'https://dodopizza-a.akamaihd.net/static/Img/Products/1e74fb971fe34337a87ef5358b0df0dc_584x584.jpeg',
        category: 'desserts',
    },
    {
        id: '7',
        title: 'Молочный коктейль с печеньем Орео',
        description: 'КНапиток из молока и мороженого с добавлением дробленого печенья «Орео»',
        price: '179 ₽',
        img: 'https://dodopizza-a.akamaihd.net/static/Img/Products/86fe757e450745b295c8b1645efc2a3f_584x584.jpeg',
        category: 'desserts',
    },
    {
        id: '8',
        title: 'Классический молочный коктейль',
        description: 'Напиток из молока и мороженого',
        price: '159 ₽',
        img: 'https://dodopizza-a.akamaihd.net/static/Img/Products/f08ef3e758024f378031e8f796480005_584x584.jpeg',
        category: 'desserts',
    },
    {
        id: '9',
        title: 'Клубничный молочный коктейль',
        description: 'Напиток из молока и мороженого с клубничным сиропом',
        price: '159 ₽',
        img: 'https://dodopizza-a.akamaihd.net/static/Img/Products/478229ad9cfd4e9aa203aa3d0e022bce_584x584.jpeg',
        category: 'desserts',
    },
    {
        id: '10',
        title: 'Айс Капучино',
        description: 'Бодрящий напиток из мороженого, двойного эспрессо, с шоколадным сиропом',
        price: '159 ₽',
        img: 'https://dodopizza-a.akamaihd.net/static/Img/Products/4441a2d30c9c48d3a1ac172fac93ac2d_584x584.jpeg',
        category: 'desserts',
    },
];

const initialState: {list: DessertModel[]} = {
    list: DESERTS_DATA,
};

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
    },
});

export default cartSlice.reducer;
