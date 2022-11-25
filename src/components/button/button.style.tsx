import { Pressable, Text } from 'react-native'
import styled from 'styled-components'
import React, { FC } from 'react'
import { isEmpty } from 'lodash'

export const ButtonStyle = styled(Pressable)`
  border-width: 1px;
  padding: 15px;
  font-weight: ${({ bold }) => bold ? 'bold' : 'normal'};
  font-size: 20px;
  background-color:${({ bgColor }) => !isEmpty(bgColor) ? bgColor : 'transparent'};
  border-color:${({ bgColor, color }) => isEmpty(bgColor) && color ? color : bgColor};
`

type CustomButton = {
    title: string,
    bold?: boolean,
    bgColor?: string,
    color?: string,
    onPress: () => any
};
export const CustomButton: FC<CustomButton> = ({ title, bold, onPress, bgColor = '', color = 'white' }) => {
  return (
    <ButtonStyle color={color} bold={bold} onPress={onPress} bgColor={bgColor}>
      <Text style={{
        fontSize: 16,
        lineHeight: 21,
        fontWeight: 'bold',
        letterSpacing: 0.25,
        color
      }}>{title}</Text>
    </ButtonStyle>
  )
}
