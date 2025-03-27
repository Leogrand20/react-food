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

      <Main></Main>

      <Footer />
    </div>
  )
}
