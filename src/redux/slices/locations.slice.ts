import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface IlocationsSlice {
    selectedLocation: any
}

const initialState: IlocationsSlice = {
  selectedLocation: null
}

export const locationsSlice = createSlice({
  name: 'locations',
  initialState,
  reducers: {
    setSelectedLocation: (state, action: PayloadAction<any>) => {
      state.selectedLocation = action.payload
    }
  }
})

export const { setSelectedLocation } = locationsSlice.actions

export default locationsSlice.reducer
