import { TouchableOpacity } from 'react-native'
import styled from 'styled-components'

export const EventCardWrapper = styled(TouchableOpacity)`
width: 100%;
`

export const CommonCard = styled.View`
  background-color: ${({ color }) => color};
  padding: 20px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: flex-start;
`
