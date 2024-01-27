import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { EfoodData } from '../../App'

type CartState = {
    items: EfoodData[]
    isOpen: boolean
}

const initialState: CartState = {
    items: [],
    isOpen: false
}

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        add: (state, action: PayloadAction<EfoodData>) => {
            state.items.push(action.payload)
        },
        open: (state) => {
            state.isOpen = true
        },
        close: (state) => {
            state.isOpen = false
        }
    }
})

export const { add, open, close } = cartSlice.actions
export default cartSlice.reducer