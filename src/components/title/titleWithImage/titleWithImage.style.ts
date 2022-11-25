import styled from 'styled-components'
import { Image } from 'react-native'
import Title from '../Title'

export const TitleWithImageContainerStyle = styled.View`
display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
`

export const TitleStyle = styled(Title)`
flex: 1;
`

export const ImageStyle = styled(Image).attrs(() => ({
  resizeMode: 'contain'
}))`
  flex: 0.8;
`
