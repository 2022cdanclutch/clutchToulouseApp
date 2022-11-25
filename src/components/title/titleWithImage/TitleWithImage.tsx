import { TitleWithImageContainerStyle, ImageStyle, TitleStyle } from './titleWithImage.style'
import { FC } from 'react'

type TTitleWithImage = {
    title: string,
    image: any
}
const TitleWithImage: FC<TTitleWithImage> = ({ title, image }) => {
  return (
    <TitleWithImageContainerStyle>
      <TitleStyle title={title} marginTop={15} size={26} marginBottom={15}/>
      <ImageStyle source={image}/>
    </TitleWithImageContainerStyle>
  )
}

export default TitleWithImage
