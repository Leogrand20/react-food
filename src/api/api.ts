import { Categories } from '../types/categories'
import { Meals } from '../types/meals'
import { IRecipe } from '../types/recipe'
import { API_URL } from './config'

const getAllCategories = async (): Promise<Categories> => {
  const res = await fetch(API_URL + 'categories.php')
  const json = await res.json()

  return json.categories
}

const getFilteredByCategories = async (catName: string): Promise<Meals> => {
  const res = await fetch(API_URL + 'filter.php?c=' + catName)
  const json = await res.json()

  return json.meals
}

const getMealByID = async (mealId: string): Promise<IRecipe> => {
  const res = await fetch(API_URL + 'lookup.php?i=' + mealId)
  const json = await res.json()

  return json.meals[0]
}

export { getAllCategories, getFilteredByCategories, getMealByID }
