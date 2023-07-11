import { configureStore, createSlice } from '@reduxjs/toolkit';

// user_state
const user = createSlice({
    name: 'user',
    initialState: { name: '최연정' },

    reducers: {
        changeName(state) {
            state.name = state.name + ' : NickName';
        },
    }, // reducers
}); // createSlice

export const { changeName } = user.actions; // actions : 변경함수

// cart_state
const cart = createSlice({
    name: 'cart',
    initialState: [],
    reducers: {
        addItem(state, action) {
            const index = state.findIndex((findId) => {
                return findId.id === action.payload.id;
            });
            if (index > -1) {
                state[index].count++;
            } else {
                state.push(action.payload);
            }
        }, // addItem

        deleteItem(state, action) {
            const index = state.findIndex((findId) => {
                return findId.id === action.payload;
            });
            state.splice(index, 1);
        }, // deleteItem

        addCount(state, action) {
            const index = state.findIndex((findId) => {
                return findId.id === action.payload;
            });
            state[index].count++;
        },
        subCount(state, action) {
            const index = state.findIndex((findId) => {
                return findId.id === action.payload;
            });
            if (state[index].count > 1) {
                state[index].count--;
            }
        },
    },
});

export const { addItem, deleteItem, addCount, subCount } = cart.actions;

export default configureStore({
    reducer: {
        user: user.reducer,
        cart: cart.reducer,
    },
});
