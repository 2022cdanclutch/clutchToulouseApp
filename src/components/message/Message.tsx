import { MessageStyle, MessageContentStyle, MessageTimestampLeft } from './message.style'
import Ievent from '../../redux/slices/Ievent'
import { format, getHours } from 'date-fns'
import { Text } from 'react-native'
import fr from 'date-fns/locale/fr'
import { capitalize } from 'lodash'
import { FC } from 'react'
import { FontAwesome5 } from '@expo/vector-icons'
import { useAppSelector } from '../../redux/hooks'

type TMessage = {
    event: Ievent,
    index: number,
}
const Message: FC<TMessage> = ({ event, index }) => {
  const alerts = useAppSelector(state => state.alerts.alerts)
  console.log('ALERTS', alerts)
  const whenEventIs = (date) => {
    const hours = getHours(new Date(date))
    if (hours < 18 && hours > 12) {
      return 'Cette après-midi'
    } else if (hours < 12) {
      return 'Ce matin'
    } else {
      return 'Ce soir'
    }
  }

  /* const deleteAlert = (eventName: string) => {
    const index = alerts.findIndex(a => a.name === eventName)
    console.log('INDEX TO DELETE', index)
    // delete alerts[index]
  } */

  return (
    <MessageStyle index={index}>
      <MessageContentStyle>
        <Text style={{
          color: 'white',
          fontWeight: 'bold'
        }}>
          {capitalize(format(new Date(event.start_date), 'PPPPp', { locale: fr }))}
        </Text>
        <Text style={{
          color: 'white'
        }}>
          {whenEventIs(event.start_date)} {event.name.toUpperCase()} AU {event.location.name.toUpperCase()}
        </Text>
        {/* <FontAwesome5 onPress={deleteAlert(event.name)} style={{ position: 'absolute', right: 0, top: 10 }} name={'trash'} size={15} color="white"/> */}
      </MessageContentStyle>
      <MessageTimestampLeft>
      </MessageTimestampLeft>
    </MessageStyle>
  )
}

export default Message
