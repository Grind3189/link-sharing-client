import {Routes, Route} from 'react-router-dom'
import Login from './pages/Login'
import Register from './pages/Register'
import Layout from './components/layout/Layout'
import Home from './pages/Home'
import Profile from './pages/Profile'
function App() {

  return (
    <Routes>
      <Route path='/login' element={<Login />} />
      <Route path='/register' element={<Register />} />
      <Route path='/' element={<Layout />}>
        <Route index element={<Home />} />
        <Route path='/profile' element={<Profile />} />
      </Route>
    </Routes>
  )
}

export default App