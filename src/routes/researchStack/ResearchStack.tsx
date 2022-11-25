import { createNativeStackNavigator } from '@react-navigation/native-stack'
import ResearchScreen from '../../screens/research/ResearchScreen'
import EventDetailsScreen from '../../screens/components/eventDetails/EventDetailsScreen'

import NavigationOptions from '../NavigationOptions'
import Eroutes from '../Eroutes'

const ResearchStack = () => {
  const Stack = createNativeStackNavigator()

  return (
    <Stack.Navigator screenOptions={NavigationOptions}>
      <Stack.Screen name={Eroutes.RESEARCH_SCREEN} component={ResearchScreen}/>
      <Stack.Screen name={Eroutes.EVENT_DETAILS_SCREEN} component={EventDetailsScreen}/>
    </Stack.Navigator>
  )
}

export default ResearchStack
