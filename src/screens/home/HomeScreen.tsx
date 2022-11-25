import { BackHandler } from 'react-native'
import CarrouselContainer from '../../components/CarrouselContainer'
import { useFocusEffect } from '@react-navigation/native'
import { useEffect, useState, useCallback, FC } from 'react'
import * as SplashScreen from 'expo-splash-screen'
import Header from '../../components/headers/Header'
import * as Font from 'expo-font'
import * as S from './Home.style'

type THomeScreen = {}

const HomeScreen: FC<THomeScreen> = () => {
  useFocusEffect(
    useCallback(() => {
      const onBackPress = () => {
        BackHandler.exitApp()
        return true
      }
      BackHandler.addEventListener('hardwareBackPress', onBackPress)

      return () =>
        BackHandler.removeEventListener('hardwareBackPress', onBackPress)
    }, [])
  )

  const getFonts = async () => await Font.loadAsync({
    'Poppins-Bold': require('../../../assets/fonts/Poppins-Bold.otf'),
    'Poppins-Italic': require('../../../assets/fonts/Poppins-Italic.otf'),
    'Poppins-SemiBoldItalic': require('../../../assets/fonts/Poppins-SemiBoldItalic.otf')
  })

  const [fontsloaded, setFontsLoaded] = useState(false)

  useEffect(() => {
    async function prepare () {
      try {
        // Keep the splash screen visible while we fetch resources
        await SplashScreen.preventAutoHideAsync()

        // Pre-load fonts, make any API calls you need to do here
        await getFonts()
      } catch (e) {
        console.warn(e)
      } finally {
        // Tell the application to render
        setFontsLoaded(true)
      }
    }
    prepare()
  }, [])

  const onLayoutRootView = useCallback(async () => {
    if (fontsloaded) {
      await SplashScreen.hideAsync()
    }
  }, [fontsloaded])

  if (!fontsloaded) {
    return null
  }
  return (
    <S.HomeScroller showsVerticalScrollIndicator={false} onLayout={onLayoutRootView}>
      <Header bgTexture={require('../../../assets/images/Textures/TEXTURE6.png')} />
      <CarrouselContainer type='category'/>
      <CarrouselContainer type='headline'/>
      <CarrouselContainer type='Today'/>
    </S.HomeScroller>
  )
}

export default HomeScreen
