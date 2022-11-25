import Container, { ContainerTouchable } from './ContainerTouchable'
import { FontAwesome5 } from '@expo/vector-icons'
import styled from 'styled-components'
import { View } from 'react-native'
import { FC, useEffect } from 'react'
import { Link } from '@react-navigation/native'
import window from '@react-navigation/native/src/__mocks__/window'

type TInformation = {
  text: string,
  icon: string,
  bold?: boolean,
  underline?: boolean,
  color?: string,
  onPress?: () => any
  isTouchable?: boolean,
  display?: string
}

const TextStyle = styled.Text`
  width: 80%;
  font-weight: ${({ bold }) => bold ? 'bold' : 'normal'};
  text-decoration: ${({ underline }) => underline ? 'underline' : 'none'};
  color: ${({ color }) => color || 'black'};
`
const Information: FC<TInformation> = ({ text, icon, bold, underline, color, onPress, isTouchable = true, display }) => {
  return (
    <>
      {isTouchable
        ? (
          <ContainerTouchable display={display} onPress={onPress} position={'relative'} justify={'space-around'} align={'center'} style={{
            marginTop: 5
          }}>
            <View style={{ width: 30 } }>
              <FontAwesome5 name={icon} size={18} color="black" />
            </View>
            <TextStyle bold={bold} underline={underline} color={color}>{text}</TextStyle>
          </ContainerTouchable>
        )
        : (
          <Container display={display} onPress={onPress} position={'relative'} justify={'space-around'} align={'center'} style={{
            marginTop: 5
          }}>
            <View style={{ width: 30 } }>
              <FontAwesome5 name={icon} size={18} color="black" />
            </View>
            <TextStyle bold={bold} underline={underline} color={color}>{text}</TextStyle>
          </Container>
        )}
    </>
  )
}

export default Information
