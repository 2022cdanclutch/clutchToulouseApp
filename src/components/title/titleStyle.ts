import styled from 'styled-components'

const TitleStyle = styled.Text`
text-transform: ${({ transform }) => transform || 'none'};
  font-weight: ${({ weight }) => weight || 'normal'};
  text-align: ${({ align }) => align || 'center'};
  font-size: ${({ size }) => size}px;
  color: ${({ color }) => color || 'black'};
  font-family: ${({ font }) => font};
`

export default TitleStyle
