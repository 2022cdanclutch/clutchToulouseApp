import ResearchContent from './components/ResearchContent/ResearchContent'
import { useAppDispatch, useAppSelector } from '../../redux/hooks'
import SearchBarCityGuide from './components/SearchBarCityGuide'
import HeaderIcons from '../../components/headers/HeadersIcons'
import { useGetAllEventsQuery } from '../../api/events.service'
import Container from '../../components/ContainerTouchable'
import ScreenWrapper from '../../components/ScreenWrapper'
import CategoriesList from './components/CategoriesList'
import Title from '../../components/title/Title'
import Ievent from '../../redux/slices/Ievent'
import Filters from './components/Filters'
import { Image, ScrollView } from 'react-native'
import React, { useState } from 'react'
import Loading from '../../components/loading/Loading'

const ResearchScreen = () => {
  const dispatch = useAppDispatch()
  const [dataFiltered, setDataFiltered] = useState<Ievent[] | undefined>(undefined)
  const currentFilter = useAppSelector(state => state.events.currentFilter)
  const { data, error, isLoading, refetch } = useGetAllEventsQuery('page=1&itemsPerPage=100&start_date%5Bstrictly_after%5D=' + new Date().toISOString().slice(0, 10))

  const refresh = () => {
    setDataFiltered(undefined)
    return refetch()
  }

  return (
    <ScreenWrapper bg={'#085066'}>
      <HeaderIcons/>
      <Image style={{ top: 0, left: 125 }} source={require('../../../assets/images/logo/C1_white.png')}/>
      <Title marginBottom={15} marginTop={40} title={'rechercher un évènement'} weight={'bold'}
        transform={'uppercase'} size={25} color={'white'}/>
      <SearchBarCityGuide refresh={refresh} events={data} setDataFiltered={setDataFiltered}/>
      <Filters onChangeFilter={(filter) => dispatch({ type: 'events/changeCurrentFilter', payload: filter })}/>
      <ScrollView style={{ marginTop: 30, marginBottom: 60 }}>
        {currentFilter === 'categories'
          ? (
            <CategoriesList/>
          )
          : (
            <Container direction={'column'}>
              <ResearchContent error={error} data={!dataFiltered ? data : dataFiltered} isLoading={isLoading}/>
            </Container>
          )}
      </ScrollView>
    </ScreenWrapper>
  )
}

export default ResearchScreen
