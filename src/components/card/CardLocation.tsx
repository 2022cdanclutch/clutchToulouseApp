import { CommonCard, EventCardWrapper } from './card'
import Ievent from '../../redux/slices/Ievent'
import Container from '../ContainerTouchable'
import Information from '../Information'
import Title from '../title/Title'
import { map } from 'lodash'
import Tag from '../tag/Tag'
import { FC } from 'react'

type TCardEvent = {
    color: string,
    event: Ievent,
    marginTop: number,
    tags?: string[]
};

const CardLocation: FC<TCardEvent> = ({ color, tags, marginTop = 20, event }) => {
  return (
    <EventCardWrapper style={{ marginTop }} /* onPress={handlePress} */>
      <CommonCard color={color}>
        <Container justify={'center'} style={{ textAlign: 'center', marginRight: 30 }}>
          <Title title={event.location.name} transform={'uppercase'} marginTop={0} size={20} marginBottom={0}
            color={'white'}/>
        </Container>
        <Container direction={'column'} justify={'center'} align={'flex-start'}>
          <Information bold underline
            text={`${event.location.business_hours}`.length < 4 ? 'Information indisponible' : `${event.location.name}, ${event.location.street_name}`}
            icon={'map-marker-alt'}/>
          <Information text={event.location.city ? event.location.city : 'Information indisponible'} icon={'ticket-alt'}/>
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
export default CardLocation
