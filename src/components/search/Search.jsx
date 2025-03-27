import { useState } from 'react'
import './Search.css'

export const Search = ({ onSearch }) => {
  const [value, setValue] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()

    onSearch(value)
  }

  return (
    <form className="form-search d-flex" role="search" onSubmit={handleSubmit}>
      <input
        className="form-control me-2"
        type="search"
        placeholder="Search"
        aria-label="Search"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <button className="btn btn-outline-success" type="submit">
        Search
      </button>
    </form>
  )
}
