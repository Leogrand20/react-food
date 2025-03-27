import { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router'
import { getAllCategories } from '../../api'
import { Preloader } from '../components/preloader/Preloader'
import { CategoryList } from '../components/category/CategoryList'
import { Search } from '../components/search/Search'

export const Home = ({}) => {
  const [catalogue, setCatalogue] = useState([])
  const [filteredCatalogue, setFilteredCatalogue] = useState([])
  const { search } = useLocation()
  const navigate = useNavigate()

  const handleSearch = () => {}

  useEffect(() => {}, [])

  return (
    <>
      <Search />
    </>
  )
}
