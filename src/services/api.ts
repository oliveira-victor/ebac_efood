import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

type Product = {
    id: number
    price: number
}

type PurchasePayload = {
    products: Product[]
    delivery: {
        receiver: string
        address: {
            description: string
            city: string
            zipcode: string
            number: number
            complement?: string
        }
    }
    payment: {
        card: {
            name: string
            number: string
            code: number
            expires: {
                month: number
                year: number
            }
        }
    }
}

type PurchaseResponse = {
    orderId: string
}

const api = createApi({
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://fake-api-tau.vercel.app/api/efood'
    }),
    endpoints: (builder) => ({
        getRestaurants: builder.query<EfoodData[], void>({
            query: () => 'restaurantes'
        }),
        getRestaurantId: builder.query<EfoodData, string>({
            query: (id) => `restaurantes/${id}`
        }),
        purchase: builder.mutation<PurchaseResponse, PurchasePayload>({
            query: (body) => ({
                url: 'checkout',
                method: 'POST',
                body
            })
        })
    })
})

export const { useGetRestaurantsQuery, useGetRestaurantIdQuery, usePurchaseMutation } = api

export default api