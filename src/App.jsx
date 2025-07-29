import React from 'react'
import Header from './components/header/Header'
import { Route, Routes } from 'react-router-dom'
import Products from './pages/products/Products'
import Users from './pages/users/Users'
import Recipes from './pages/recipes/Recipes'
import NotFound from './pages/NotFound/NotFound'
import Login from './pages/login/Login'
import ProductsDetail from './pages/products/productsDetail'
import RecipesDetail from './pages/recipes/RecipesDetail'
import UsersDetail from './pages/users/UsersDetail'
import Footer from './components/footer/Footer'

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Products />} />
        <Route path='/:id' element={<ProductsDetail />} />
        <Route path='/recipes' element={<Recipes />} />
        <Route path='/recipes/:id' element={<RecipesDetail />} />
        <Route path='/users' element={<Users />} />
        <Route path='/users/:id' element={<UsersDetail />} />
        <Route path='/login' element={<Login />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
      <Footer/>
    </>
  )
}

export default App