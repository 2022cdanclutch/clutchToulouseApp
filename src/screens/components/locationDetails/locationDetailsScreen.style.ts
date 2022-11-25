import { Image, View } from 'react-native'
import styled from 'styled-components'

export const IconRoundedStyle = styled(Image)`
  border-radius: 85px;
  border-width: 10px;
  border-color: white;
  width: 165px;
  height: 165px;
  position: absolute;
  top: -80px;
`

export const Content = styled(View)`
  background-color: white;
  padding: 0 20px 60px 20px;
  height: 70%;
  width: 100%;
  bottom: 0;
  position: absolute;
`
