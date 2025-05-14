import { FC } from 'react'

import { MealsListProps } from '../../types/meals'
import { MealsItem } from './MealsItem'

export const MealsList: FC<MealsListProps> = ({ meals }) => {
  return (
    <>
      <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4">
        {meals.map((item) => (
          <MealsItem key={item.idMeal} {...item} />
        ))}
      </div>
    </>
  )
}
