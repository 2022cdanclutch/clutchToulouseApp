import { Fontisto, Ionicons, MaterialIcons } from '@expo/vector-icons'
import Container from '../../../components/ContainerTouchable'
import { useAppSelector } from '../../../redux/hooks'
import { FC } from 'react'

type TFilters = {
  onChangeFilter: (filter: string) => any
}

const Filters: FC<TFilters> = ({ onChangeFilter }) => {
  const currentFilter = useAppSelector(state => state.events.currentFilter)
  return (
    <Container justify={'flex-start'} style={{
      marginTop: 15
    }}>
      <Fontisto onPress={() => onChangeFilter('place')} style={{
        marginLeft: 20
      }} name="map-marker-alt" size={34} color={currentFilter === 'place' ? '#FA4E74' : 'white' } />
      <Ionicons onPress={() => onChangeFilter('calendar')} style={{
        marginLeft: 20
      }} name="md-calendar-sharp" size={34} color={currentFilter === 'calendar' ? '#FA4E74' : 'white' } />
      <MaterialIcons style={{
        marginLeft: 20
      }} onPress={() => onChangeFilter('categories')} name="star" size={34} color={currentFilter === 'categories' ? '#FA4E74' : 'white' } />
    </Container>
  )
}

export default Filters
