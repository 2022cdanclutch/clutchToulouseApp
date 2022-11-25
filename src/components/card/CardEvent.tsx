import { useAppDispatch, useAppSelector } from '../../redux/hooks'
import { useNavigation } from '@react-navigation/native'
import { CommonCard, EventCardWrapper } from './card'
import { FontAwesome } from '@expo/vector-icons'
import Ievent from '../../redux/slices/Ievent'
import Container from '../ContainerTouchable'
import Eroutes from '../../routes/Eroutes'
import Information from '../Information'
import fr from 'date-fns/locale/fr'
import Title from '../title/Title'
import { find, map } from 'lodash'
import { format } from 'date-fns'
import Tag from '../tag/Tag'
import { FC } from 'react'

type TCardEvent = {
    color: string,
    event: Ievent,
    marginTop: number,
    tags?: string[]
};

const CardEvent: FC<TCardEvent> = ({ color, tags, marginTop = 20, event }) => {
  const navigation = useNavigation()
  const dispatch = useAppDispatch()
  const alerts = useAppSelector(state => state.alerts.alerts)
  const handlePress = () => {
    dispatch({ type: 'events/setSelectedEvent', payload: event })
    navigation.navigate(Eroutes.EVENT_DETAILS_SCREEN)
  }

  const isFavorite = find(alerts, ['@id', event['@id']]) !== undefined

  return (
    <EventCardWrapper
      style={{
        marginTop
      }}
      onPress={handlePress}>
      <CommonCard color={color}>
        <FontAwesome
          style={{
            position: 'absolute',
            right: 20,
            top: 20
          }}
          name={isFavorite ? 'heart' : 'heart-o'}
          onPress={() => dispatch(isFavorite ? { type: 'alerts/disableAlert', payload: event['@id'] } : { type: 'alerts/setAlerts', payload: event })}
          size={24}
          color={isFavorite ? '#00ADBB' : 'white'}
        />
        <Container justify={'center'} style={{ textAlign: 'center', marginRight: 30 }}>
          <Title title={event.name} transform={'uppercase'} marginTop={0} size={20} marginBottom={0}color={'white'}/>
        </Container>
        <Container direction={'column'} justify={'center'} align={'flex-start'}>
          <Information isTouchable={false} text={format(new Date(event.start_date), 'PPp', { locale: fr })}
            icon={'clock'}
            color={'white'}
            display={event.start_date ? 'flex' : 'none'}/>
          <Information
            bold
            underline
            isTouchable={false}
            text={`${event.location.name}, ${event.location.street_name}`}
            icon={'map-marker-alt'}
            color={'white'}
            display={`${event.location.name}, ${event.location.street_name}`.length < 4 ? 'none' : 'flex'}/>
          <Information
            isTouchable={false}
            text={event.price}
            icon={'ticket-alt'}
            color={'white'}
            display={event.price ? 'flex' : 'none'}/>
        </Container>
        <Container style={{ marginTop: 15 }} justify={'center'} align={'center'}>
          {tags && map(tags, (tag, index) => (
            <Tag color={'white'} key={index} title={tag}/>
          ))}
        </Container>
      </CommonCard>
    </EventCardWrapper>
  )
}

export default CardEvent
