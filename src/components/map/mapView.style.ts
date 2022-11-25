// @ts-ignore
import styled from 'styled-components'
import MapView from 'react-native-maps'
import { StyleSheet } from 'react-native'

export const Map = styled(MapView)`
position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0
`
export const mapStyles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'flex-end',
    alignItems: 'center'
  },
  map: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0
  }
})

export const markerStyle = StyleSheet.create({
  markerImage: {
    width: 30,
    height: 30
  },
  popup: {
    flexDirection: 'column',
    alignSelf: 'flex-start',
    width: 100,
    borderStartWidth: 5,
    borderStartColor: '#000000',
    paddingLeft: 5,
    marginBottom: 1
  },
  popupHeader: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 18,
    width: 100
  }
})
