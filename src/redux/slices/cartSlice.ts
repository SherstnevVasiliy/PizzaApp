import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {CartSlicesModels, Product, ProductsType} from '../../models/slices/cartSliceModels';

const initialState: CartSlicesModels = {
    products: [],
};

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addProduct: {
            reducer: (state, action: PayloadAction<Product>) => {
                state.products.push(action.payload.product);
            },
            prepare: (product: ProductsType, count: number) => ({
                payload: {
                    product,
                    count,
                },
            }),
        },
        removeProduct: {
            reducer: (state, action: PayloadAction<Product>) => {
                state.products.map((item) => {
                    if (item.id !== action.payload.product.id) {
                        return item;
                    } return null;
                });
            },
            prepare: (product: ProductsType, count: number) => ({
                payload: {
                    product,
                    count,
                },
            }),
        },
    },
});

export const {addProduct, removeProduct} = cartSlice.actions;
export default cartSlice.reducer;
