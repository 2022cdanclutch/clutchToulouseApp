import { Content, IconRoundedStyle } from './locationDetailsScreen.style'
import { HeaderImage } from '../eventDetails/eventDetailsScreen.style'
import Container from '../../../components/ContainerTouchable'
import Information from '../../../components/Information'
import { Link, useNavigation } from '@react-navigation/native'
import { useAppSelector } from '../../../redux/hooks'
import Title from '../../../components/title/Title'
// import NextEvents from './components/NextEvents'
import { ScrollView, StyleSheet, Text } from 'react-native'
import Tag from '../../../components/tag/Tag'
import { Ionicons } from '@expo/vector-icons'
import { map } from 'lodash'
import window from '@react-navigation/native/src/__mocks__/window'

const styles = StyleSheet.create({
  title: {
    fontFamily: 'Poppins-Bold',
    fontSize: 12,
    color: '#000000'
  },
  description: {
    fontFamily: 'Poppins-SemiBoldItalic',
    fontSize: 10,
    color: '#000000'
  },
  date: {
    fontFamily: 'Poppins-Bold',
    fontSize: 12,
    color: '#ffffff',
    padding: 5
  },
  icon: {
    fontFamily: 'Poppins-Bold',
    fontSize: 12,
    color: '#ffffff',
    marginLeft: 5
  }
})

const LocationDetailsScreen = () => {
  const navigation = useNavigation()
  const location = useAppSelector(state => state.events.selectedEvent?.location)
  const texture6 = require('../../../../assets/images/Textures/texture1.png')
  const icon = require('../../../../assets/icon.png')
  const bGImage = (imagePath: string) => location?.image === null || location?.image === 'clutch.gif'
    ? imagePath
    : { uri: `https://clutchmag.fr/images/locations/${location?.image}` }
  console.log('location', location)
  return (
    <>
      <HeaderImage source={bGImage(texture6)}>
        <Ionicons onPress={() => navigation.goBack()} name="chevron-back-circle-outline" size={40}
          color="white" style={{
            position: 'absolute',
            top: 60,
            left: 20
          }}/>
      </HeaderImage>
      <Content>
        <Container justify={'center'}>
          <IconRoundedStyle source={bGImage(icon)}/>
        </Container>
        <Title title={location !== undefined && location !== null ? location!.name : ''} marginTop={100} size={20} marginBottom={20}/>
        <ScrollView showsVerticalScrollIndicator={false}>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <Container justify={'space-around'} align={'center'}>
              {location?.tags && map(location.tags, (tag, key) => (
                <Tag title={tag} color={'#625A96'} key={key}/>
              ))}
            </Container>
          </ScrollView>
          <Container style={{ marginTop: 30 }} direction={'column'} align={'flex-start'}>
            <Information isTouchable={false}
              text={location !== undefined && location !== null ? location!.business_hours : ''}
              icon={'clock'}
              display={location!.business_hours ? 'flex' : 'none'}/>
            <Information isTouchable={false}
              text={location !== undefined && location !== null ? location!.street_name : ''}
              icon={location!.street_name !== null ? 'map-marker-alt' : ''}
              display={`${location!.street_name}`.length < 4 ? 'none' : 'flex'}/>
            <Information isTouchable={false}
              text={location !== undefined && location !== null ? location!.phone : ''}
              icon={'phone'}
              display={location!.phone ? 'flex' : 'none'}/>
            <Information isTouchable={false}
              text={location !== undefined && location !== null ? location!.website : ''}
              icon={'link'}
              display={location!.website ? 'flex' : 'none'}/>
            <Information isTouchable={false}
              text={location !== undefined && location !== null ? location!.facebook : ''}
              icon={'facebook'}
              display={location?.facebook ? 'flex' : 'none'}/>
            <Information isTouchable={false}
              text={location !== undefined && location !== null ? location!.twitter : ''}
              icon={'twitter'}
              display={location!.twitter ? 'flex' : 'none'}/>
            <Information isTouchable={false}
              text={location !== undefined && location !== null ? location!.youtube : ''}
              icon={'youtube'}
              display={location!.youtube ? 'flex' : 'none'}/>
            <Information isTouchable={false}
              text={location !== undefined && location !== null ? location!.instagram : ''}
              icon={'instagram'}
              display={location!.instagram ? 'flex' : 'none'}/>
          </Container>
          <Container style={{ marginTop: 30 }} >
            <Text>{location !== undefined && location !== null ? location!.content : ''}</Text>
          </Container>
          {/* <Title title={'LES PROCHAINS EVENEMENTS DANS CE LIEU'} color={'#085066'} marginTop={20} size={15} marginBottom={0}/> */}
          {/* <NextEvents locationId={location !== undefined && location !== null ? location!['@id'] : ''}/> */}
        </ScrollView>
      </Content>
    </>
  )
}

export default LocationDetailsScreen
