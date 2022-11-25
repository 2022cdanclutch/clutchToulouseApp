import * as S from './CategoryItem.style'
import { FC } from 'react'
import Icategory from '../../../redux/slices/Icategory'

type TCategoryItem = {
    categoryName: string,
    onPress: (category: Icategory) => any,
    color: string
}
const CategoryItem: FC<TCategoryItem> = ({ categoryName, onPress, color }) => {
  return (
    <S.CategoryItemContainer color={color} onPress={onPress} >
      <S.CategoryName>{categoryName}</S.CategoryName>
    </S.CategoryItemContainer>
  )
}

export default CategoryItem
