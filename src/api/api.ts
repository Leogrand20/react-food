import { API_URL } from './config'

const getAllCategories = async () => {
  const res = await fetch(API_URL + 'categories.php')
  const json = await res.json()

  return json.categories
}

const getFilteredByCategories = async (catName) => {
  const res = await fetch(API_URL + 'filter.php?c=' + catName)
  const json = await res.json()

  return json.meals
}

const getMealByID = async (mealId) => {
  const res = await fetch(API_URL + 'lookup.php?i=' + mealId)
  const json = await res.json()

  return json.meals[0]
}

export { getAllCategories, getFilteredByCategories, getMealByID }