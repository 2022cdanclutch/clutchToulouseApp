import { LatLng, MapViewProps, Marker } from 'react-native-maps'
import React, { FC, useEffect, useRef } from 'react'
import { Map } from './preventView.style'
import { Appearance, Image } from 'react-native'
import { markerStyle } from '../map/mapView.style'

type TPreventViewAdress = {
    coordinate: LatLng,
    category: any
}

const PreventViewAdress: FC<TPreventViewAdress> = ({ coordinate, category }) => {
  return (
    <Map
      initialRegion={{
        latitude: coordinate.latitude,
        longitude: coordinate.longitude,
        latitudeDelta: 0.01,
        longitudeDelta: 0.01
      }}>
      <Marker coordinate={{
        latitude: coordinate.latitude,
        longitude: coordinate.longitude
      }}>
        {category === 1 &&
              <Image
                style={markerStyle.markerImage}
                resizeMode={'contain'}
                source={Appearance.getColorScheme() === 'dark' ? require('../../../assets/images/markers/Fant_violet_dark.png') : require('../../../assets/images/markers/Fant_violet.png')}
              />
        }{category === 2 &&
          <Image
            style={markerStyle.markerImage}
            resizeMode={'contain'}
            source={Appearance.getColorScheme() === 'dark' ? require('../../../assets/images/markers/Fant_bleu_dark.png') : require('../../../assets/images/markers/Fant_bleu.png')}
          />
        }{category === 3 &&
          <Image
            style={markerStyle.markerImage}
            resizeMode={'contain'}
            source={Appearance.getColorScheme() === 'dark' ? require('../../../assets/images/markers/Fant_black_dark.png') : require('../../../assets/images/markers/Fant_black.png')}
          />
        }{category === 4 &&
          <Image
            style={markerStyle.markerImage}
            resizeMode={'contain'}
            source={Appearance.getColorScheme() === 'dark' ? require('../../../assets/images/markers/Fant_jaune_dark.png') : require('../../../assets/images/markers/Fant_jaune.png')}
          />
        }{category === 5 &&
          <Image
            style={markerStyle.markerImage}
            resizeMode={'contain'}
            source={Appearance.getColorScheme() === 'dark' ? require('../../../assets/images/markers/Fant_rose_dark.png') : require('../../../assets/images/markers/Fant_rose.png')}
          />
        }
      </Marker>
    </Map>
  )
}

export default PreventViewAdress
