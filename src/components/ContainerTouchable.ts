import { TouchableOpacity, View } from 'react-native'
import styled from 'styled-components'

export const ContainerTouchable = styled(TouchableOpacity)`
  display: ${({ display }) => display || 'flex'};
  flex-direction: ${({ direction }) => direction || 'row'};
  justify-content: ${({ justify }) => justify || 'center'};
  align-items: ${({ align }) => align || 'center'};
  position: ${({ position }) => position || 'relative'};
  margin-bottom: ${({ marginBottom }) => marginBottom || 0}px;
`
export const Container = styled(View)`
  display: ${({ display }) => display || 'flex'};
  flex-direction: ${({ direction }) => direction || 'row'};
  justify-content: ${({ justify }) => justify || 'center'};
  align-items: ${({ align }) => align || 'center'};
  position: ${({ position }) => position || 'relative'};
  margin-bottom: ${({ marginBottom }) => marginBottom || 0}px;
`

export const Content = styled(View)`
  height: 75%;
  padding: 15px 15px 0px 15px;
  width: 100%;
  bottom: 0;
  position: absolute;
  background-color: white;
`

export default Container
