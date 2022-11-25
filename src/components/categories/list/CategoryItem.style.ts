import { Text, TouchableOpacity } from 'react-native'
import styled from 'styled-components'

export const CategoryItemContainer = styled(TouchableOpacity)<{color: string}>`
  width: 100%;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background-color: ${({ color }) => color};
  padding: 25px 10px;
  margin-top: 20px;
`
export const CategoryName = styled(Text)`
color: white;
  text-transform: uppercase;
  font-weight: bold;
`
