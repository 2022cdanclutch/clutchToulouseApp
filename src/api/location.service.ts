import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import Ilocations from '../redux/slices/Ilocations'
import { reverse } from 'lodash'

export const locationApi = createApi({
  reducerPath: 'locationApi',
  refetchOnFocus: true,
  baseQuery: fetchBaseQuery({ baseUrl: 'https://clutchmag.fr/api/' }),
  endpoints: (builder) => ({
    getAllEvents: builder.query<Ilocations[], void>({
      query: () => 'locations?',
      transformResponse: (response: Ilocations[], meta, arg) => {
        return reverse(response['hydra:member'] as Ilocations[])
      }
    })
  })
})

export const { useGetAllEventsQuery } = locationApi
