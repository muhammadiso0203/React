import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Posts from './pages/posts'
import Header from './components/Header'
import Users from './pages/users/users'
import UsersDetail from './pages/users/usersDetail'
import Todos from './pages/todos'
import Footer from './components/Footer'

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Users />} />
        <Route path='/users/:id' element={<UsersDetail />} />
        <Route path='/posts' element={<Posts />} />
        <Route path='/todos' element={<Todos />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App