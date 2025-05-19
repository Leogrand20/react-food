import { useEffect, useState, useTransition } from 'react'
import { useNavigate,useParams } from 'react-router'

import { getMealByID } from '../api/api'
import { Preloader } from '../components/preloader/Preloader'
import { IRecipe } from '../types/recipe'

export const Recipe = () => {
  const { idRecipe } = useParams()
  const navigate = useNavigate()
  const [recipe, setRecipe] = useState<IRecipe>({})
  const [isPending, startTransition] = useTransition()

  useEffect(() => {
    startTransition(() => {
      if (idRecipe) {
        getMealByID(idRecipe).then((data) => {
          setRecipe(data)
        })
      }
    })
  }, [idRecipe])

  const {
    strMealThumb: img,
    strMeal: name,
    strInstructions: descr,
    strYoutube: link,
    strArea: area,
  } = recipe

  let columnNumber = 0

  return (
    <>
      <button
        type="button"
        className="btn btn-warning mb-2"
        onClick={() => navigate(-1)}
      >
        Go back
      </button>

      {isPending ? (
        <Preloader />
      ) : (
        <div className="card-recipe">
          <div className="card-recipe__img">
            <img
              src={String(img)}
              className="img-fluid rounded-start"
              alt={String(name)}
            />

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
                    columnNumber++

                    return (
                      <tr key={key}>
                        <th scope="row">{columnNumber}</th>
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
                src={`https://www.youtube.com/embed/${link.slice(-11)}`}
                allowFullScreen
              ></iframe>
            )}
          </div>
        </div>
      )}
    </>
  )
}
