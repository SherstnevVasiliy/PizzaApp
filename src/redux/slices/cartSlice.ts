import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {ProductItemType} from '../../models/ProductItemModels';


interface InitialState {
    items: ProductItemType[],
}

const initialState: InitialState = {
    items: [],
};

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addItem: (state, action: PayloadAction<ProductItemType>) => {
            state.items.push(action.payload);
        },
        // removeItem: (state, action) => {
        //
        // },
    },
});

export const {addItem} = cartSlice.actions;
export default cartSlice.reducer;
