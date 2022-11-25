import PreventViewAdress from '../../../components/preventViewAdress/PreventViewAdress'
// import { CustomButton } from '../../../components/button/button.style'
import { useAppDispatch, useAppSelector } from '../../../redux/hooks'
import { Image, ScrollView, TouchableOpacity, View } from 'react-native'
import { HeaderImage, Content } from './eventDetailsScreen.style'
import Container from '../../../components/ContainerTouchable'
import { Ionicons, FontAwesome, FontAwesome5 } from '@expo/vector-icons'
import Information from '../../../components/Information'
import { useNavigation } from '@react-navigation/native'
import Title from '../../../components/title/Title'
import Eroutes from '../../../routes/Eroutes'
import Tag from '../../../components/tag/Tag'
import fr from 'date-fns/locale/fr'
import { find, map } from 'lodash'
import { format } from 'date-fns'
import React from 'react'

const EventDetailsScreen = () => {
  const navigation = useNavigation()
  const dispatch = useAppDispatch()
  const event = useAppSelector(state => state.events.selectedEvent)
  const alerts = useAppSelector(state => state.alerts.alerts)

  const handleLocationPress = () => {
    navigation.navigate(Eroutes.LOCATION_DETAILS_SCREEN)
  }
  const isFavorite = find(alerts, ['@id', event !== undefined && event !== null ? event!['@id'] : '']) !== undefined
  console.log('EVENT Category', event?.category)
  return (
    <>
      <HeaderImage source={
        event?.location?.image === null || event?.location?.image === 'clutch.gif'
          ? require('../../../../assets/images/Textures/texture1.png')
          : { uri: `https://clutchmag.fr/images/locations/${event?.location?.image}` }
      }>
        <Ionicons
          onPress={() => navigation.goBack()}
          name="chevron-back-circle-outline"
          size={40}
          color="white"
          style={{
            position: 'absolute',
            top: 60,
            left: 20
          }}/>
      </HeaderImage>
      <Content>
        <TouchableOpacity
          style={{
            position: 'absolute',
            right: 30,
            top: -35,
            width: 70,
            height: 70,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 50,
            backgroundColor: 'white'
          }}>
          {isFavorite
            ? (
              <FontAwesome
                name="heart"
                onPress={() => dispatch({
                  type: 'alerts/disableAlert',
                  payload: event !== undefined && event !== null ? event!['@id'] : ''
                })}
                size={35}
                color="#625A96"/>
            )
            : (
              <FontAwesome
                name="heart-o"
                onPress={() => dispatch({ type: 'alerts/setAlerts', payload: event })}
                size={35}
                color="#625A96"/>
            )}
        </TouchableOpacity>
        <ScrollView showsVerticalScrollIndicator={false}>
          <Title
            color={'#625A96'}
            align={'left'}
            title={event!.name}
            marginTop={10}
            size={25}
            marginBottom={0}/>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <View style={{ display: 'flex', flexDirection: 'row' }}>
              {event?.tags && map(event.tags, (tag, index) => (
                <Tag key={index} color={'#625A96'} title={tag}/>
              ))}
            </View>
          </ScrollView>
          <Container
            style={{
              marginTop: 20
            }}
            direction={'column'}
            justify={'center'}
            align={'flex-start'}>
            <Information
              text={format(new Date(event!.start_date), 'PPp', { locale: fr })}
              icon={'clock'}
              display={event?.start_date ? 'flex' : 'none'}/>
            <Information
              text={event!.location.phone}
              icon={'phone'}
              display={event!.location.phone ? 'flex' : 'none'}/>
            <Information
              bold
              underline
              onPress={handleLocationPress}
              text={`${event!.location.name}, ${event!.location.street_name}`}
              icon={'map-marker-alt'}
              display={`${event!.location.name}, ${event!.location.street_name}`.length < 4 ? 'none' : 'flex'}/>
            <Information
              text={event!.price}
              icon={'ticket-alt'}
              display={event!.price ? 'flex' : 'none'}/>
          </Container>
          <Container
            style={{
              marginTop: 30,
              marginBottom: 30
            }}
            justify={'space-between'}>
            {/* <CustomButton bold bgColor={'#625A96'} title={'AJOUTER À L’AGENDA'} onPress={() => console.log('test')}/>
            <CustomButton bold color={'#625A96'} title={'RESERVER'} onPress={() => console.log('test')}/> */}
          </Container>
          {event?.location?.longitude && event?.location?.latitude && event?.category
            ? <PreventViewAdress
              coordinate={{ latitude: event?.location.latitude, longitude: event?.location.longitude }}
              category={event?.category}/>
            : null
          }
        </ScrollView>
      </Content>
    </>
  )
}

export default React.memo(EventDetailsScreen)
