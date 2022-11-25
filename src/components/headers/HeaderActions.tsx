import { Image, Pressable, StyleSheet, View } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import Eroutes from '../../routes/Eroutes'
import { useState } from 'react'

type Props = {
    hasBackBtn: boolean;
};

export default function HeaderActions ({ hasBackBtn }: Props) {
  const [icon] = useState(hasBackBtn ? require('../../../assets/images/Arrow_up.png') : require('../../../assets/images/Menu/Wishlist.png'))
  const navigation = useNavigation()
  const handleAction = () => {
    if (hasBackBtn) {
      return navigation.goBack()
    }
    return navigation.navigate('Alerts')
  }

  return (
    <View style={styles.headerActions}>
      <Pressable onPress={handleAction}>
        <Image source={icon} />
      </Pressable>
    </View>
  )
}

const styles = StyleSheet.create({
  headerActions: {
    width: '100%',
    position: 'absolute',
    top: 10,
    paddingHorizontal: 10
  }
})
