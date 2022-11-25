import { createNativeStackNavigator } from '@react-navigation/native-stack'
import AlertsScreen from '../../screens/alerts/AlertsScreen'
import NavigationOptions from '../NavigationOptions'
import Eroutes from '../Eroutes'

const AlertsStack = () => {
  const Stack = createNativeStackNavigator()

  return (
    <Stack.Navigator screenOptions={NavigationOptions}>
      <Stack.Screen name={Eroutes.ALERTS_SCREEN} component={AlertsScreen}/>
    </Stack.Navigator>
  )
}

export default AlertsStack
