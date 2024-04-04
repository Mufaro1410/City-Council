import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Dashboard from './pages/Dashboard'
import Login from './pages/Login'
import Payments from './pages/Payments'
import Registration from './pages/Registration'
import Navbar from './components/Navbar'

function App() {

  return (
    <>
      <Navbar/>
      <Routes >
        <Route index element={<Home/>}/>
        <Route path='/dashboard' element={<Dashboard/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/payments' element={<Payments/>}/>
        <Route path='/registration' element={<Registration/>}/>
      </Routes>
    </>
  )
}

export default App
