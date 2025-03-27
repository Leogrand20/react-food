import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router'
import { getFilteredByCategories } from '../../api'
import { Preloader } from '../components/preloader/Preloader'
import { MealsList } from '../components/meals/MealsList'

export const Category = () => {
  const [meals, setMeals] = useState([])
  const navigate = useNavigate()

  const reverse = () => {}

  useEffect(() => {}, [])

  return (
    <>
      <div className="category-buttons">
        <button type="button" className="btn btn-warning">
          Go back
        </button>

        <button type="button" className="btn btn-danger">
          Sort By Name
        </button>
      </div>
    </>
  )
}
