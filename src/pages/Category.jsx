import { useEffect, useState, useTransition } from 'react'
import { useNavigate, useParams } from 'react-router'
import { getFilteredByCategories } from '../../api'
import { Preloader } from '../components/preloader/Preloader'
import { MealsList } from '../components/meals/MealsList'

export const Category = () => {
  const { catName } = useParams()
  const [meals, setMeals] = useState([])
  const navigate = useNavigate()
  const [isPending, startTransition] = useTransition()

  const reverse = () => {
    setMeals(meals.toReversed())
  }

  useEffect(() => {
    startTransition(() => {
      if (!meals.length) {
        getFilteredByCategories(catName).then((data) => {
          setMeals(data)
        })
      }
    })
  }, [catName])

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
