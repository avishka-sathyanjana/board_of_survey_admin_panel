import React from 'react'
import Container from '@mui/material/Container'
import Box from '@mui/material/Box'
import Navbar from '../components/Navbar'
import { Outlet } from 'react-router-dom'

export default function PageLayout() {
  return (
    <Box>
        <Navbar/>

        <Container sx={
            {
                marginTop: 4
            }
        
        }>
            <Outlet/>
        </Container>

    </Box>
  )
}
