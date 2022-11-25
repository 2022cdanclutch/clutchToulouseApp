import { useNavigation } from '@react-navigation/native'
import { AntDesign } from '@expo/vector-icons'
import Container from '../ContainerTouchable'
import Eroutes from '../../routes/Eroutes'

const HeaderIcons = () => {
  const navigation = useNavigation()

  return (
    <Container style={{ marginTop: 20 }} justify={'space-between'}>
      <AntDesign onPress={() => {
        navigation.navigate(Eroutes.ALERTS_SCREEN)
      }} name="heart" size={30} color="black" />
      {/* <Feather name="settings" size={30} color="black" /> */}
    </Container>
  )
}

export default HeaderIcons
