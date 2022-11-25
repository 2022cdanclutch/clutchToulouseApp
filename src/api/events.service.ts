import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import Ievent from '../redux/slices/Ievent'
import { reverse } from 'lodash'

/* const yesterday = new Date(new Date().setHours(0, 0, 0))
console.log('DATE', yesterday)
const twoMonthsAfter = new Date(new Date(new Date().setMonth(yesterday.getMonth() + 2)).setHours(0, 0, 0))
console.log('2 months after', twoMonthsAfter) */
export const eventsApi = createApi({
  reducerPath: 'eventsApi',
  refetchOnFocus: true,
  baseQuery: fetchBaseQuery({ baseUrl: 'https://clutchmag.fr/api/' }),
  endpoints: (builder) => ({
    getAllEvents: builder.query<Ievent[], string>({
      query: (params) => 'events?' + params,
      transformResponse: (response: Ievent[], meta, arg) => {
        console.log('ARGS', arg)
        return response['hydra:member'] as Ievent[]
      }
    })
  })
})

export const { useGetAllEventsQuery } = eventsApi
