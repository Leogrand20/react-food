import { Link } from 'react-router'

export const MealsItem = ({ idMeal: id, strMealThumb: img, strMeal: name }) => {
  return (
    <div className="col">
      <div className="card h-100 border-warning p-2">
        <img src={img} className="card-img-top" alt={name} />
        <div className="card-body text-center">
          <h5 className="card-title">{name}</h5>
          <Link className="btn btn-primary">Watch this recipe</Link>
        </div>
      </div>
    </div>
  )
}
