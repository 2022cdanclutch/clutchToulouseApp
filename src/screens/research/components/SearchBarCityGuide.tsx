import RNDateTimePicker from '@react-native-community/datetimepicker'
import { useAppDispatch, useAppSelector } from '../../../redux/hooks'
import SearchBar from '../../../components/searchBar/SearchBar'
import React, { FC, useEffect, useState } from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { clone, filter, isUndefined } from 'lodash'
import Ievent from '../../../redux/slices/Ievent'
import fr from 'date-fns/locale/fr'
import { format } from 'date-fns'
import DateTimePicker from 'react-native-modal-datetime-picker'
import Loading from '../../../components/loading/Loading'
import { isLoading } from 'expo-font'

type TSearchBarCityGuide = {
    events: Ievent[] | undefined,
    refresh: () => any,
    setDataFiltered: React.Dispatch<React.SetStateAction<Ievent[] | undefined>>,
}

const styles = StyleSheet.create({
  clearFilter: {
    right: 5,
    alignSelf: 'flex-end'
  },
  text: {
    fontFamily: 'Poppins-SemiBoldItalic',
    fontSize: 10,
    color: '#ffffff'
  }
})

const SearchBarCityGuide: FC<TSearchBarCityGuide> = ({ events, refresh, setDataFiltered }) => {
  const { currentFilter, currentResearch, eventsByCategory } = useAppSelector(state => state.events)
  const dispatch = useAppDispatch()
  const [isDatePickerVisible, setDatePickerVisibility] = useState<boolean>(false)
  const [selectedDate, setSelectedDate] = useState(new Date())
  const showDatePicker = () => {
    setDatePickerVisibility(true)
  }

  const hideDatePicker = () => {
    setDatePickerVisibility(false)
  }

  const handleConfirm = (date: Date) => {
    setSelectedDate(date)
    setDatePickerVisibility(false)
  }
  console.log('************************')
  console.log('EVENTS', events)
  console.log('************************')
  const handleSearch = () => {
    const theTernary = (event: Ievent) => (
      (event.location.name && event.location.name.toLowerCase().includes(currentResearch.toLowerCase())) ||
            (event.location.street_name && event.location.street_name.toLowerCase().includes(currentResearch.toLowerCase()))
    )
    switch (currentFilter) {
    case 'place':
      if (events && currentResearch !== '') {
        const updatedData = filter(clone(events), event => {
          if (theTernary(event) || (event.name && event.name.toLowerCase().includes(currentResearch.toLowerCase()))) {
            return event
          }
        })
        setDataFiltered(updatedData as Ievent[])
      } else if (events && currentResearch === '') {
        refresh()
      }
      break
    case 'calendar':
      if (events && !isUndefined(selectedDate)) {
        const updatedData = filter(clone(events), event => {
          if ((new Date(event.start_date).getDate() === new Date(selectedDate).getDate() &&
                                new Date(event.start_date).getMonth() === new Date(selectedDate).getMonth() &&
                                new Date(event.start_date).getFullYear() === new Date(selectedDate).getFullYear()) ||
              new Date(event.start_date) > new Date(selectedDate)
          ) {
            return event
          }
        })
        setDataFiltered(updatedData as Ievent[])
      } else if (events && currentResearch === '') {
        refresh()
      }
      break
    case 'categories':
      if (eventsByCategory && currentResearch !== '') {
        const updatedData = filter(clone(eventsByCategory), event => {
          if (theTernary(event)) {
            return event
          }
        })
        dispatch({ type: 'events/setCurrentEvents', payload: updatedData })
      } else if (eventsByCategory && currentResearch === '') {
        dispatch({ type: 'events/setCurrentEvents', payload: null })
        refresh()
      }
    }
  }

  const handleOnChangeDate = (date: Date) => {
    if (date) {
      dispatch({ type: 'events/setDateFilter', payload: date?.toDateString() })
      handleSearch()
    }
    return setDatePickerVisibility(false)
  }

  useEffect(() => {
    if (currentFilter === 'calendar') {
      setDatePickerVisibility(true)
    }
  }, [currentFilter])
  return (
    <>
      {currentFilter === 'calendar'
        ? (
          <View style={{
            display: 'flex',
            justifyContent: 'center'
          }}>
            <SearchBar style={{ position: 'relative' }} onSearch={handleSearch}
              currentSearch={format(selectedDate, 'PP', { locale: fr })}
              onChange={searchWord => dispatch({
                type: 'events/setCurrentResearch',
                payload: searchWord
              })}
              placeholder={'Recherche'} iconRight={{
                color: '#FA4E74',
                name: 'search'
              }}
            />
            {
              <DateTimePicker
                isVisible={isDatePickerVisible}
                mode="date"
                date={new Date(selectedDate)}
                minimumDate={new Date()}
                onConfirm={handleConfirm}
                onCancel={hideDatePicker}
                locale={'fr_FR'}
              />
            }
            <TouchableOpacity style={{ position: 'absolute', height: 50, width: 310 }}
              onPress={showDatePicker}>
            </TouchableOpacity>
          </View>
        )
        : (
          <SearchBar onSearch={handleSearch}
            currentSearch={currentResearch}
            onChange={searchWord => dispatch({
              type: 'events/setCurrentResearch',
              payload: searchWord
            })}
            placeholder={'Recherche'} iconRight={{
              color: '#FA4E74',
              name: 'search'
            }}
          />
        )}
    </>
  )
}

export default SearchBarCityGuide
