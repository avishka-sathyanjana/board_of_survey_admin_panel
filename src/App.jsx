import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import LoginForm from './components/LoginForm'
import AdminDashboard from './components/AdminDashboard'
import AddUser from './pages/addUserPage'

function App() {
   return(
      // <AdminDashboard />
      // <LoginForm/>
      <AddUser />
   )
}

export default App
