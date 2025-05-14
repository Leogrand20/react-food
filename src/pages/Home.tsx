import { useEffect, useState, useTransition } from 'react'
import { useLocation, useNavigate } from 'react-router'

import { getAllCategories } from '../api/api'
import { Preloader } from '../components/preloader/Preloader'
import { CategoryList } from '../components/category/CategoryList'
import { Search } from '../components/search/Search'

export const Home = ({}) => {
  const [catalogue, setCatalogue] = useState([])
  const [filteredCatalogue, setFilteredCatalogue] = useState([])
  const { search } = useLocation()
  const navigate = useNavigate()
  const [isPending, startTransition] = useTransition()

  const handleSearch = (text) => {
    setFilteredCatalogue(
      catalogue.filter(({ strCategory }) => {
        strCategory.toLowerCase().includes(text.toLowerCase())
      }),
    )

    navigate(`/?search=${text}`, { relative: 'path' })
  }

  useEffect(() => {
    startTransition(() => {
      {
        !catalogue.length
      }
      {
        getAllCategories().then((data) => {
          setCatalogue(data)
          setFilteredCatalogue(
            search
              ? data.filter(({ strCategory }) =>
                  strCategory
                    .toLowerCase()
                    .includes(search.split('=')[1].toLowerCase()),
                )
              : data,
          )
        })
      }
    })
  }, [search])

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
