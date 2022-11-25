import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { filter } from 'lodash'
import Ievent from './Ievent'

interface IinitialState {
  alerts: Ievent[],
  notificationsSend: Ievent[]
}

const initialState: IinitialState = {
  alerts: [],
  notificationsSend: []
}

export const alertsSlice = createSlice({
  name: 'alerts',
  initialState,
  reducers: {
    setAlerts: (state, action: PayloadAction<Ievent>) => {
      state.alerts.push(action.payload)
    },
    disableAlert: (state, action: PayloadAction<string>) => {
      state.alerts = filter(state.alerts, event => event['@id'] !== action.payload)
      state.notificationsSend = filter(state.notificationsSend, event => event['@id'] !== action.payload)
    },
    setNotification: (state, action: PayloadAction<Ievent>) => {
      state.notificationsSend.push(action.payload)
    }
  }
})

export const { setAlerts } = alertsSlice.actions

export default alertsSlice.reducer
