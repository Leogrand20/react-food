export interface IMeal {
  strMeal: string
  strMealThumb: string
  idMeal: string
}

export type Meals = IMeal[]

export type MealsListProps = {
  meals: Meals
}

export type MealsItemProps = IMeal
