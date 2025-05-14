import { useEffect, useState, useTransition } from 'react'
import { useLocation, useNavigate } from 'react-router'

import { Preloader } from '../components/preloader/Preloader'
import { CategoryList } from '../components/category/CategoryList'
import { Search } from '../components/search/Search'

import { getAllCategories } from '../api/api'
import { Categories } from '../types/categories'

export const Home = () => {
  const [catalogue, setCatalogue] = useState<Categories>([])
  const [filteredCatalogue, setFilteredCatalogue] = useState(catalogue)
  const { search } = useLocation()
  const navigate = useNavigate()
  const [isPending, startTransition] = useTransition()

  const handleSearch = (text: string) => {
    setFilteredCatalogue(
      catalogue.filter(({ strCategory }) => {
        strCategory.toLowerCase().includes(text.toLowerCase())
      })
    )

    navigate(`/?search=${text}`, { relative: 'path' })
  }

  useEffect(() => {
    startTransition(() => {
      getAllCategories().then((data) => {
        setCatalogue(data)
        setFilteredCatalogue(
          search
            ? data.filter(({ strCategory }) =>
                strCategory
                  .toLowerCase()
                  .includes(search.split('=')[1]!.toLowerCase())
              )
            : data
        )
      })
    })
  }, [search, catalogue.length])

  return (
    <>
      <Search onSearch={handleSearch} />

      {isPending ? (
        <Preloader />
      ) : (
        <CategoryList catalogue={filteredCatalogue} />
      )}
    </>
  )
}
