import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import ResearchStack from '../researchStack/ResearchStack'
import AgendaStack from '../agendaStack/AgendaStack'
import AlertsStack from '../alertsStack/AlertsStack'
import ReaderStack from '../readerStack/ReaderStack'
import MapStack from '../mapStack/MapStack'
import { Image } from 'react-native'
import HomeStack from '../homeStack/HomeStack'

const Root = () => {
  const Tab = createBottomTabNavigator()

  return (
    <Tab.Navigator screenOptions={({ route }) => ({
      tabBarActiveTintColor: '#00ADBB',
      tabBarInactiveTintColor: 'white',
      tabBarShowLabel: false,
      tabBarStyle: { backgroundColor: 'black', left: 10, right: 10, position: 'absolute', borderTopLeftRadius: 15, borderTopRightRadius: 15 }
    })} >
      <Tab.Screen name={'Home'} options={{
        headerShown: false,
        tabBarIcon: ({ color, size }) => (
          <Image source={color === 'white'
            ? require('../../../assets/images/Menu/Home.png')
            : require('../../../assets/images/Menu/Home_active.png') }/>
        )
      }} component={HomeStack}/>
      <Tab.Screen name={'Research'} options={{
        headerShown: false,
        tabBarIcon: ({ color, size }) => (
          <Image source={color === 'white'
            ? require('../../../assets/images/Menu/Search.png')
            : require('../../../assets/images/Menu/Search_active.png')}/>

        )
      }} component={ResearchStack}/>
      {/* <Tab.Screen name={'Agenda'} options={{
        headerShown: false,
        tabBarIcon: ({ color, size }) => (
          <Image source={color === 'white'
            ? require('../../../assets/images/Menu/Agenda.png')
            : require('../../../assets/images/Menu/Agenda_active.png')}/>
        )
      }} component={AgendaStack}/> */}
      <Tab.Screen name={'Map'} options={{
        headerShown: false,
        tabBarIcon: ({ color, size }) => (
          <Image source={color === 'white'
            ? require('../../../assets/images/Menu/Map.png')
            : require('../../../assets/images/Menu/Map_active.png')}/>
        )
      }} component={MapStack}/>
      <Tab.Screen name={'Alerts'} options={{
        headerShown: false,
        tabBarIcon: ({ color, size }) => (
          <Image source={color === 'white'
            ? require('../../../assets/images/Menu/Notification.png')
            : require('../../../assets/images/Menu/Notification_active.png')}/>
        )
      }} component={AlertsStack}/>
      {/* <Tab.Screen name={'Reader'} options={{
        headerShown: false,
        tabBarIcon: ({ color, size }) => (
          <Image source={color === 'white'
            ? require('../../../assets/images/Menu/Book.png')
            : require('../../../assets/images/Menu/Book_active.png')}/>
        )
      }} component={ReaderStack}/> */}
    </Tab.Navigator>
  )
}

export default Root
