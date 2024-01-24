import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { EfoodData } from '../../App'

type CartState = {
    items: EfoodData[]
}

const initialState: CartState = {
    items: []
}

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        add: (state, action: PayloadAction<EfoodData>) => {
            state.items.push(action.payload)
        }
    }
})

export const { add } = cartSlice.actions
export default cartSlice.reducer