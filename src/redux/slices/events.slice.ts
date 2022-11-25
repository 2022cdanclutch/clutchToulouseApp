import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import Ievent from './Ievent'
import Icategory from './Icategory'

export interface IeventsSlice {
  currentFilter: 'place' | 'calendar' | 'categories',
  selectedCategory: Icategory | null,
  eventsByCategory: Ievent[] | null
  currentEvents: Ievent[] | null,
  currentResearch: string,
  dateFilter: string,
  selectedEvent: Ievent | null
}

const initialState: IeventsSlice = {
  currentFilter: 'place',
  selectedCategory: null,
  eventsByCategory: null,
  currentEvents: null,
  currentResearch: '',
  dateFilter: new Date().toDateString(),
  selectedEvent: null
}

export const eventsSlice = createSlice({
  name: 'events',
  initialState,
  reducers: {
    changeCurrentFilter: (state, action: PayloadAction<'place' | 'calendar'>) => {
      state.currentFilter = action.payload
    },
    setCurrentResearch: (state, action: PayloadAction<string>) => {
      state.currentResearch = action.payload
    },
    setDateFilter: (state, action: PayloadAction<string>) => {
      state.dateFilter = action.payload
    },
    setSelectedEvent: (state, action: PayloadAction<Ievent>) => {
      state.selectedEvent = action.payload
    },
    setSelectedCategory: (state, action: PayloadAction<Icategory| null>) => {
      state.selectedCategory = action.payload
    },
    setEventsByCategory: (state, action: PayloadAction<Ievent[]>) => {
      state.eventsByCategory = action.payload
    },
    setCurrentEvents: (state, action: PayloadAction<Ievent[]>) => {
      state.currentEvents = action.payload
    }
  }
})

export const { changeCurrentFilter, setCurrentResearch, setSelectedEvent, setSelectedCategory } = eventsSlice.actions

export default eventsSlice.reducer
