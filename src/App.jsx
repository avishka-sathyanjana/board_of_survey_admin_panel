import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import LoginForm from './components/LoginForm'
import AdminDashboard from './components/AdminDashboard'
import AddUser from './pages/addUserPage'
import UpdateAssetsPage from './pages/updateAssetsPage'
import { Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import PageLayout from './Layout/PageLayout'

function App() {
   return (
      <Routes>
         <Route path="/" element={<LoginForm />} />
         <Route path="/dashboard" element={<PageLayout />}>
            <Route index element={<AdminDashboard />} />
            <Route path="add-user" element={<AddUser />} />
            <Route path="update-assets" element={<UpdateAssetsPage />} />  
         </Route>
      </Routes>
   )  
}

export default App
