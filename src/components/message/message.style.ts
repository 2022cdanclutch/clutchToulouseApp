import { colors } from '../../utils/appUtils'
import styled from 'styled-components'

export const MessageStyle = styled.View`
  position: relative;
  margin-bottom: 15px;
  width: 80%;
  padding: 10px;
  background-color: ${({ index }) => colors[index % colors.length]};
  text-align: left;
  border-radius: 10px;
  &:after {
    content: '';
    position: absolute;
    width: 0;
    height: 0;
    border-top: 15px solid #A8DDFD;
    border-left: 15px solid transparent;
    border-right: 15px solid transparent;
    top: 0;
    left: -15px;
  }
  &:before {
    content: '';
    position: absolute;
    width: 0;
    height: 0;
    border-top: 17px solid #97C6E3;
    border-left: 16px solid transparent;
    border-right: 16px solid transparent;
    top: -1px;
    left: -17px;
  }
`

export const MessageContentStyle = styled.View`
  padding: 0;
  margin: 0;
`
export const MessageTimestampRight = styled.Text`
  position: absolute;
  font-size: 0.85px;
  font-weight: 300;
  bottom: 5px;
  right: 5px;
`

export const MessageTimestampLeft = styled.Text`
  position: absolute;
  font-size: 0.85px;
  font-weight: 300;
  bottom: 5px;
  left: 5px;
`

export const MessageContainer = styled.View`
  display: flex;
  padding: 0;
  flex-direction: ${({ index }) => index % 2 === 0 ? 'row' : 'row-reverse'};
  justify-content: flex-start;
  width: 100%;
`
