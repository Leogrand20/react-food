import { useEffect, useState, useTransition } from 'react'
import { useNavigate, useParams } from 'react-router'

import { getFilteredByCategories } from '../api/api'
import { MealsList } from '../components/meals/MealsList'
import { Preloader } from '../components/preloader/Preloader'
import { Meals } from '../types/meals'

export const Category = () => {
  const { catName } = useParams()
  const [meals, setMeals] = useState<Meals>([])
  const navigate = useNavigate()
  const [isPending, startTransition] = useTransition()

  const reverse = () => {
    setMeals(meals.toReversed())
  }

  useEffect(() => {
    startTransition(() => {
      if (!meals.length) {
        if (catName) {
          getFilteredByCategories(catName).then((data) => {
            setMeals(data)
          })
        }
      }
    })
  }, [catName, meals.length])

  return (
    <>
      <div className="category-buttons">
        <button
          type="button"
          className="btn btn-warning"
          onClick={() => navigate(-1)}
        >
          Go back
        </button>

        <button type="button" className="btn btn-danger" onClick={reverse}>
          Sort By Name
        </button>
      </div>

      {isPending ? <Preloader /> : <MealsList meals={meals} />}
    </>
  )
}
