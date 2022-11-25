import { createNativeStackNavigator } from '@react-navigation/native-stack'
import NavigationOptions from '../NavigationOptions'
import HomeScreen from '../../screens/home/HomeScreen'
import Eroutes from '../Eroutes'
import ResearchScreen from '../../screens/research/ResearchScreen'
import EventDetailsScreen from '../../screens/components/eventDetails/EventDetailsScreen'

const HomeStack = () => {
  const Stack = createNativeStackNavigator()

  return (
    <Stack.Navigator screenOptions={NavigationOptions}>
      <Stack.Screen name={Eroutes.HOME_SCREEN} component={HomeScreen}/>
      <Stack.Screen name={Eroutes.RESEARCH_SCREEN} component={ResearchScreen}/>
      <Stack.Screen name={Eroutes.EVENT_DETAILS_SCREEN} component={EventDetailsScreen}/>
    </Stack.Navigator>
  )
}

export default HomeStack
