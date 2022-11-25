import { TextInput } from 'react-native'
import styled from 'styled-components'

export const SearchBarStyle = styled(TextInput)`
  height: 50px;
  padding-left: 10px;
  flex: 1;
`

export const SearchBarContainer = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding-right: 10px;
  background-color: white;
`
