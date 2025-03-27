import { useState } from 'react'
import './Search.css'

export const Search = () => {
  const [value, setValue] = useState('')

  const handleOnChange = () => {}

  const handleSubmit = () => {}

  return (
    <form className="form-search d-flex" role="search">
      <input
        className="form-control me-2"
        type="search"
        placeholder="Search"
        aria-label="Search"
      />
      <button
        className="btn btn-outline-success"
        type="submit"
      >
        Search
      </button>
    </form>
  )
}
