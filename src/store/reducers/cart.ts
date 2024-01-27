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
            const dish = state.items.find(item => item.id === action.payload.id)

            if (!dish) {
                state.items.push(action.payload)
            } else {
                alert('Este prato já está no carrinho')
            }
        },
        remove: (state, action: PayloadAction<number>) => {
            state.items.filter(item => item.id !== action.payload)
        },
        open: (state) => {
            state.isOpen = true
        },
        close: (state) => {
            state.isOpen = false
        }
    }
})

export const { add, remove, open, close } = cartSlice.actions
export default cartSlice.reducer