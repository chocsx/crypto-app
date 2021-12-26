import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

const crytoApiHeaders = {
  'x-rapidapi-host': 'coinranking1.p.rapidapi.com',
  'x-rapidapi-key': '65252a6a63msh6aafd7165f2b455p1cfd5cjsn22525a19908b'
}
const baseUrl = 'https://coinranking1.p.rapidapi.com/';


const createRequest = (url) => ({url, headers: crytoApiHeaders})

export const cryptoApi = createApi({
  reducerPath: 'cryptoApi',
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    getCryptos: builder.query({
      query: () => createRequest('/exchanges')
    })
  })
})

export const {
  useGetCryptosQuery,
} = cryptoApi;
