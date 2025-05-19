import { Route,Routes } from 'react-router'

import { Footer } from '../../layouts/Footer'
import { Header } from '../../layouts/Header'
import { Main } from '../../layouts/Main'
import { Category } from '../../pages/Category'
import { Home } from '../../pages/Home'
import { NotFound } from '../../pages/NotFound'
import { Recipe } from '../../pages/Recipe'

import './App.css'

export const App = () => {
  return (
    <div className="food">
      <Header />

      <Main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/category/:catName" element={<Category />} />
          <Route path="/recipe/:idRecipe" element={<Recipe />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Main>

      <Footer />
    </div>
  )
}
