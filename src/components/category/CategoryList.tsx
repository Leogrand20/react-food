import { FC } from 'react'

import { CategoryListProps } from '../../types/categories'
import { CategoryItem } from './CategoryItem'

export const CategoryList: FC<CategoryListProps> = ({ catalogue }) => {
  return (
    <>
      <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4">
        {catalogue.map((item) => (
          <CategoryItem key={item.idCategory} {...item} />
        ))}
      </div>
    </>
  )
}
