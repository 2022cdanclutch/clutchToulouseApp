import { Image, ImageBackground, ImageSourcePropType, StyleSheet, View } from 'react-native'
import HeaderActions from './HeaderActions'

type Props = {
    bgTexture: ImageSourcePropType;
};

/**
* Clutch Header component
*
* @param {ImageSourcePropType} bgTexture - require('{assets_directory}/Textures/{texture_name}.png')
* @return {JSX.Element}
*/
const Header = ({ bgTexture }: Props): JSX.Element => {
  return (
    <View style={styles.container}>
      <ImageBackground
        style={styles.background}
        resizeMode='cover'
        source={bgTexture}
      >
        <HeaderActions hasBackBtn={false} />
      </ImageBackground>
      <Image
        style={styles.logo}
        source={require('../../../assets/images/clutch/logo_rondV2.png')}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    width: '100%'
  },
  background: {
    height: 150,
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  logo: {
    marginTop: -50,
    marginBottom: 25,
    width :90,
    height:90
  }
})

export default Header
