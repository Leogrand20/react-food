import * as bootstrap from 'bootstrap'
import { Routes, Route } from 'react-router'

import { Header } from '../../layouts/Header'
import { Main } from '../../layouts/Main'
import { Home } from '../../pages/Home'
import { Category } from '../../pages/Category'
import { Recipe } from '../../pages/Recipe'
import { Footer } from '../../layouts/Footer'
import { NotFound } from '../../pages/Notfound'

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
