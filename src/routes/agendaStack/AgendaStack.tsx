import { createNativeStackNavigator } from '@react-navigation/native-stack'
import NavigationOptions from '../NavigationOptions'
import Agenda from '../../screens/Agenda'
import Eroutes from '../Eroutes'

const AgendaStack = () => {
  const Stack = createNativeStackNavigator()

  return (
    <Stack.Navigator screenOptions={NavigationOptions}>
      <Stack.Screen name={Eroutes.AGENDA_SCREEN} component={Agenda}/>
    </Stack.Navigator>
  )
}

export default AgendaStack
