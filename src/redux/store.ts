import { configureStore, SerializedError } from '@reduxjs/toolkit'
import eventsReducer from './slices/events.slice'
import alertsReducer from './slices/alerts.slice'
import { eventsApi } from '../api/events.service'
import { FetchBaseQueryError } from '@reduxjs/toolkit/query'

export const store = configureStore({
  reducer: {
    // Add the generated reducer as a specific top-level slice
    [eventsApi.reducerPath]: eventsApi.reducer,
    events: eventsReducer,
    alerts: alertsReducer
  },
  // Adding the api middleware enables caching, invalidation, polling,
  // and other useful features of `rtk-query`.
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(eventsApi.middleware),
  devTools: true
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export type TGetDataError = FetchBaseQueryError | SerializedError | undefined
