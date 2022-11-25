import styled from 'styled-components'

const ScreenWrapper = styled.View`
  padding: 15px 30px 0 30px;
  background-color: ${({ bg }) => bg || 'white'};
  flex: 1;
`
export default ScreenWrapper
