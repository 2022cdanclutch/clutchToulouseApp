import { createNativeStackNavigator } from '@react-navigation/native-stack'
import NavigationOptions from '../NavigationOptions'
import MapScreen from '../../screens/map/MapScreen'
import Eroutes from '../Eroutes'

const MapStack = () => {
  const Stack = createNativeStackNavigator()

  return (
    <Stack.Navigator screenOptions={NavigationOptions}>
      <Stack.Screen name={Eroutes.MAP_SCREEN} component={MapScreen}/>
    </Stack.Navigator>
  )
}

export default MapStack
