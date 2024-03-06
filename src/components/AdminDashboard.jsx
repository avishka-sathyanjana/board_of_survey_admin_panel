import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';


function AdminDashboard() {
    return (
        <div>
            <Card sx={{ maxWidth: 345 }}>
                <CardActionArea>
                    <CardMedia
                        component="img"
                        height="140"
                        image="https://www.thespruceeats.com/thmb/3ZlXz6aWfQJQK9bV2eVv4b5Fg7A=/960x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/GettyImages-1133609950-5c8f8f6b46e0fb0001e1e3f2.jpg"
                        alt="green iguana"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            Admin Dashboard
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            Welcome to the Admin Dashboard
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
        </div>
    );
}

export default AdminDashboard;