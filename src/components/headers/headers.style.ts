import { ImageBackground } from 'react-native'
import styled from 'styled-components'

export const HeaderImage = styled(ImageBackground).attrs(({ source }) => {
  source
})`
  width: 100%;
  display: flex;
  align-items: center;
  height: 40%;
`
