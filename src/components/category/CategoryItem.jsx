import { Link } from 'react-router'

export const CategoryItem = ({
  strCategoryThumb: img,
  strCategory: category,
  strCategoryDescription: descr,
}) => {
  return (
    <div className="col">
      <div className="card h-100 border-warning p-2">
        <img src={img} className="card-img-top" alt={category} />
        <div className="card-body text-center">
          <h5 className="card-title">{category}</h5>
          <p className="card-text">{descr.slice(0, 100)}...</p>
          <Link to={`/category/${category}`} className="btn btn-primary">
            Watch this category
          </Link>
        </div>
      </div>
    </div>
  )
}
