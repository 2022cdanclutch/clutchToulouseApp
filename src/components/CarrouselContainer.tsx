import { FlatList, ListRenderItem, StyleSheet, Text, View } from 'react-native'
import { useGetAllEventsQuery } from '../api/events.service'
import CategoryCarrouselCard from './card/carrousel/CategoryCarrouselCard'
import { filter, isEmpty, isUndefined } from 'lodash'
import EventCarrouselCard from './EventCarrouselCard'
import Icategory from '../redux/slices/Icategory'
import Ievent from '../redux/slices/Ievent'
import { useEffect, useState } from 'react'
import { CATEGORIES_LIST } from '../screens/home/Home.config'
import { useNavigation } from '@react-navigation/native'
import { useAppDispatch } from '../redux/hooks'
import { batch } from 'react-redux'
import Eroutes from '../routes/Eroutes'
import Loading from './loading/Loading'

type Props = {
    type: ('category' | 'headline' | 'Today'),
}

export default function CarrouselContainer (props: Props) {
  const {
    data,
    isLoading
  } = useGetAllEventsQuery('start_date%5Bstrictly_after%5D=' + new Date().toISOString().slice(0, 10))
  const [todayEvents, setTodayFiletred] = useState<Ievent[]>()
  const [headlinesEvents, setDataFiletred] = useState<Ievent[]>()

  const navigation = useNavigation()
  const dispatch = useAppDispatch()

  useEffect(() => {
    if (!isLoading) {
      const headlinesEvents = filter(data, event => {
        if (!isEmpty(event.name) && event.is_clutchorama === true) { /* POUR TESTS : A MODIFIER => true */
          return event
        }
      })
      const todayEvents = filter(data, event => {
        if (new Date(event.start_date).toISOString().slice(0, 10) === new Date().toISOString().slice(0, 10)) {
          return event
        } /* POUR TESTS : A MODIFIER => === */
      })
      setDataFiletred(headlinesEvents as Ievent[])
      setTodayFiletred(todayEvents as Ievent[])
    }
  }, [isLoading])

  const renderCategoryCarrouselCard: ListRenderItem<Icategory> = ({ item }) => {
    const handleOnPress = (categoryData: Icategory) => {
      batch(() => {
        dispatch({ type: 'events/changeCurrentFilter', payload: 'categories' })
        dispatch({ type: 'events/setSelectedCategory', payload: categoryData })
      })
      navigation.setOptions({
        state: { state: 'Research' }
      })
      navigation.navigate(Eroutes.RESEARCH_SCREEN)
    }
    return <CategoryCarrouselCard onPress={handleOnPress} category={item}/>
  }

  const renderEventCarrouselCard: ListRenderItem<Ievent> = ({ item }) => {
    return <EventCarrouselCard event={item}/>
  }

  switch (props.type) {
  case 'category':
    if (isLoading) {
      return (
        <Loading color={'#625a96'}/>
      )
    }
    return (
      <View style={styles.carrouselContainer}>
        <Text style={styles.carrouselTitle}>Catégories</Text>
        <FlatList horizontal showsHorizontalScrollIndicator={false} data={CATEGORIES_LIST}
          renderItem={renderCategoryCarrouselCard}/>
      </View>
    )
  case 'headline':
    if (!isUndefined(headlinesEvents) && !isEmpty(headlinesEvents)) {
      return (
        <View style={styles.carrouselContainer}>
          <Text style={styles.carrouselTitle}>À LA UNE</Text>
          <FlatList horizontal showsHorizontalScrollIndicator={false} data={headlinesEvents}
            renderItem={renderEventCarrouselCard}/>
        </View>
      )
    } else {
      return null
    }
  case 'Today':
    if (isLoading) {
      return (
        <Loading color={'#625a96'}/>
      )
    }
    if (!isUndefined(todayEvents) && !isEmpty(todayEvents)) {
      return (
        <View style={styles.carrouselContainer}>
          <Text style={styles.carrouselTitle}>Aujourd hui</Text>
          <FlatList horizontal showsHorizontalScrollIndicator={false} data={todayEvents}
            renderItem={renderEventCarrouselCard}></FlatList>
        </View>
      )
    } else {
      return null
    }
  }
}

const styles = StyleSheet.create({
  carrouselContainer: {
    flex: 1,
    marginLeft: 15,
    marginBottom: 30
  },
  carrouselTitle: {
    fontFamily: 'Poppins-Bold',
    textTransform: 'uppercase',
    fontSize: 25,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 16
  }
})
