import TitleStyle from './titleStyle'
import { FC } from 'react'

type TTitle = {
    title: string,
    marginTop: number,
    weight?: string,
    transform?: 'uppercase' | 'lowercase',
    align?: string,
    size: number,
    color?: string,
    marginBottom: number
}
const Title: FC<TTitle> = ({ title, marginTop, weight, transform, align, size, color, marginBottom }) => {
  return (
    <TitleStyle style={{
      marginTop,
      marginBottom
    }} font={'Poppins-Bold'} align={align} weight={weight} transform={transform} size={size} color={color}>
      {title}
    </TitleStyle>
  )
}

export default Title
