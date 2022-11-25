import CategoryItem from '../../../components/categories/list/CategoryItem'
import { useAppDispatch, useAppSelector } from '../../../redux/hooks'
import { useGetAllEventsQuery } from '../../../api/events.service'
import Container from '../../../components/ContainerTouchable'
import CardEvent from '../../../components/card/CardEvent'
import Loading from '../../../components/loading/Loading'
import { clone, filter, map } from 'lodash'
import { useEffect, useRef, useState } from 'react'
import Ievent from '../../../redux/slices/Ievent'
import { Text } from 'react-native'
import { batch } from 'react-redux'
import { CATEGORIES_LIST } from '../../home/Home.config'
import Icategory from '../../../redux/slices/Icategory'

const CategoriesList = () => {
  const dispatch = useAppDispatch()
  const selectedCategory = useAppSelector(state => state.events.selectedCategory)
  const colorRef = useRef<string>('#FA4E74')

  const [list, setList] = useState<Icategory[]>(CATEGORIES_LIST)
  const [events, setEvents] = useState<Ievent[] | null>([])
  const { eventsByCategory, currentResearch } = useAppSelector(state => state.events)
  const { data, error, isLoading } = useGetAllEventsQuery('page=1&itemsPerPage=100&start_date%5Bstrictly_after%5D=' + new Date().toISOString().slice(0, 10))

  const handlePress = (category: Icategory) => {
    batch(() => {
      dispatch({ type: 'events/setEventsByCategory', payload: null })
      dispatch({ type: 'events/setSelectedCategory', payload: category.name === selectedCategory?.name ? null : category })
    })
  }
  const getEventsByThematic = (thematicNumber: number) => {
    const events = filter(data, event => {
      if (event.category === thematicNumber) {
        return event
      }
    })
    batch(() => {
      dispatch({ type: 'events/setCurrentEvents', payload: null })
      dispatch({ type: 'events/setEventsByCategory', payload: events })
    })
  }

  useEffect(() => {
    // lors de la sélection du thème
    if (selectedCategory) {
      // garde le thème sélectionné uniquement
      const updatedList = filter(list, cat => cat.name === selectedCategory.name)
      setList(updatedList)
      // change la couleur de fond
      colorRef.current = '#F8BC43'
      getEventsByThematic(selectedCategory.id)
    } else {
      setList(CATEGORIES_LIST)
      colorRef.current = '#FA4E74'
    }
  }, [selectedCategory, data])

  useEffect(() => {
    if (currentResearch !== '') {
      const updatedData = filter(clone(eventsByCategory), event => {
        if ((event.location.name && event.location.name.toLowerCase().includes(currentResearch.toLowerCase())) ||
         (event.location.street_name && event.location.street_name.toLowerCase().includes(currentResearch.toLowerCase())) ||
         (event.name && event.name.toLowerCase().includes(currentResearch.toLowerCase()))) {
          return event
        }
      })
      setEvents(updatedData as Ievent[])
    } else if (currentResearch === '') {
      setEvents(eventsByCategory)
    }
  }, [eventsByCategory, currentResearch])

  const listEvents = () => {
    if (isLoading) {
      return <Loading color={'#ffffff'}/>
    }
    return (
      events
        ? map(clone(events || eventsByCategory), (event, index) => (
          <CardEvent key={`${index}_event`} color={'#625A96'} marginTop={10}
            event={event}
            tags={event.tags}/>
        ))
        : <Text>Désolé, aucun évènement ne correspond à votre recherche</Text>
    )
  }

  return (
    <>
      {map(list, (category, index) => (
        <CategoryItem color={colorRef.current} key={`${index}_item`} categoryName={category.name} onPress={() => handlePress(category)}/>
      ))}
      {selectedCategory && (
        <Container direction={'column'}>
          {error
            ? (<Text>Une erreur est survenue</Text>)
            : listEvents()
          }
        </Container>
      )}
    </>
  )
}

export default CategoriesList
