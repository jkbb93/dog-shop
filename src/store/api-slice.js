const APIURL = import.meta.env.VITE_API_URL;
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const api = createApi({
    baseQuery: fetchBaseQuery({ baseUrl: `${APIURL}/` }),
    endpoints: (builder) => ({
        saveCart: builder.mutation({
            query: ({ cartToSave }) => ({
                url: "user/cart/add-item",
                method: "POST",
                credentials: "include",
                body: cartToSave,
            }),
        }),
    }),
});

export default api;
export const { useSaveCartMutation } = api;
