import { AppBar, Toolbar } from '@mui/material';
import React from 'react'
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';    
import Button from '@mui/material/Button';  
import Typography from '@mui/material/Typography';
import ucsclogo from "../assets/ucsc.png";

export default function Navbar() {
  return (
    
     <AppBar color='transparent'position='fixed' sx={
        {
            height: 55,
            boxShadow: '0 2px 4px -1px rgba(0,0,0,0.3)'
            
        }
     }>
        <Toolbar >
            <Box >
                <img src={ucsclogo} alt="logo" width= {40}/>
            </Box>
            <Typography variant="h8" component="div" padding={2}>
                Board of Survey Admin Panel
            </Typography>
            
            <Stack direction='row' spacing={2} marginLeft="auto">
                <Button color='inherit'>Dashboard</Button>
                <Button color='inherit'>Details</Button>
                <Button color='inherit'>Login</Button>

            </Stack>

        </Toolbar>
     </AppBar>
  )
}
