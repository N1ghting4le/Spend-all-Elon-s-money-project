import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';

export const apiSlice = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({baseUrl: 'https://api.jsonbin.io/v3'}),
    endpoints: builder => ({
        getGoods: builder.query({
            query: () => ({
                url: '/b/640b2a4face6f33a22ec7f20',
                method: 'GET',
                headers: {"X-Master-Key": "$2b$10$Gh3A9M7FdzujuNYHoIPLqOoyCSckBIjFCqvd5RPHV6cGsX982tv16"}
            }),
        })
    })
});

export const {useGetGoodsQuery} = apiSlice;