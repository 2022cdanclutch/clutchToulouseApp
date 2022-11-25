import Icategory from '../../../redux/slices/Icategory'
import { FC } from 'react'
import { Container, Logo, Title } from './CategoryCarrouselCard.style'

type TCategoryCarrouselCard = {
  category: Icategory,
  onPress: (categoryData: Icategory) => any
}

const CategoryCarrouselCard: FC<TCategoryCarrouselCard> = ({ category, onPress }) => {
  function getImage (categoryID:number) {
    switch (categoryID) {
    case 1:
      return require('../../../../assets/images/tickets/Ticket_2.png')
    case 2:
      return require('../../../../assets/images/tickets/Ticket_1.png')
    case 3:
      return require('../../../../assets/images/tickets/Ticket_3.png')
    case 4:
      return require('../../../../assets/images/tickets/Ticket_4.png')
    case 5:
      return require('../../../../assets/images/tickets/Ticket_5.png')
    }
  }

  return (
    <Container onPress={() => onPress(category)} >
      <Logo
        source={getImage(category.id)}
      />
      <Title >{category.name}</Title>
    </Container>
  )
}

export default CategoryCarrouselCard
