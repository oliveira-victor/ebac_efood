import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { EfoodData } from '../App'

const api = createApi({
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://fake-api-tau.vercel.app/api/efood'
    }),
    endpoints: (builder) => ({
        getRestaurants: builder.query<EfoodData, void>({
            query: () => 'restaurantes'
        }),
        getRestaurantId: builder.query<EfoodData, string>({
            query: (id) => `restaurantes/${id}`
        })
    })
})

export const { useGetRestaurantsQuery, useGetRestaurantIdQuery } = api

export default api