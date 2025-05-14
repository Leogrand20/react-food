import { API_URL } from './config'

import { Categories, Category } from '../types/categories'
import { Meal } from '../types/meals'

const getAllCategories = async (): Promise<Categories> => {
  const res = await fetch(API_URL + 'categories.php')
  const json = await res.json()

  return json.categories
}

const getFilteredByCategories = async (catName: string): Promise<Category> => {
  const res = await fetch(API_URL + 'filter.php?c=' + catName)
  const json = await res.json()

  return json.meals
}

const getMealByID = async (mealId: string): Promise<Meal> => {
  const res = await fetch(API_URL + 'lookup.php?i=' + mealId)
  const json = await res.json()

  return json.meals[0]
}

export { getAllCategories, getFilteredByCategories, getMealByID }
