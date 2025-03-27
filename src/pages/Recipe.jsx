import { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router'
import { getMealByID } from '../../api'
import { Preloader } from '../components/preloader/Preloader'

export const Recipe = () => {
  const navigate = useNavigate()
  const [recipe, setRecipe] = useState({})

  useEffect(() => {}, [])

  const {
    idMeal: id,
    strMealThumb: img,
    strMeal: name,
    strInstructions: descr,
    strYoutube: link,
    strArea: area,
  } = recipe

  return (
    <>
      <button type="button" className="btn btn-warning mb-2">
        Go back
      </button>

      {!id ? (
        <Preloader />
      ) : (
        <div className="card-recipe">
          <div className="card-recipe__img">
            <img src={img} className="img-fluid rounded-start" alt={name} />

            {area && (
              <h5 className="card-title mt-2">
                Country of origin: <strong>{area}</strong>
              </h5>
            )}
          </div>

          <div className="card-body">
            <h3 className="card-title">{name}</h3>
            <p className="card-text">{descr}</p>

            <table className="table text-center">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Ingredient</th>
                  <th scope="col">Measure</th>
                </tr>
              </thead>

              <tbody className="table-group-divider">
                {Object.keys(recipe).map((key) => {
                  if (key.includes('Ingredient') && recipe[key]) {
                    return (
                      <tr key={key}>
                        <th scope="row"></th>
                        <td>{recipe[key]}</td>
                        <td>{recipe[`strMeasure${key.slice(13)}`]}</td>
                      </tr>
                    )
                  } else return null
                })}
              </tbody>
            </table>

            {link && (
              <iframe
                width="600px"
                height="350px"
                title={idRecipe}
                src={`https://www.youtube.com/embed/`}
                allowFullScreen
              ></iframe>
            )}
          </div>
        </div>
      )}
    </>
  )
}
