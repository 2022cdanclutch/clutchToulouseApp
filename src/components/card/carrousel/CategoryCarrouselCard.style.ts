import styled from 'styled-components'
import { Image, Text, TouchableOpacity } from 'react-native'

export const Container = styled(TouchableOpacity)`
  flex: 1;
  display: flex;
  margin-right: 9px;
  align-items: center;
  justify-content: center;
`

export const Title = styled(Text)`
  position: absolute;
  font-family: Poppins-Bold;
  text-transform: uppercase;
  font-size: 17px;
  color: white;
  margin: 15px;
`

export const Logo = styled(Image)`
  height: 87px;
  width: 143px
`
