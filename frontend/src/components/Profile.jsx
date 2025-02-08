import React from 'react';
import { Card, CardContent, Typography, Avatar, Button, Box } from '@mui/material';

const Profile = () => {
  const user = {
    name: "John Doe",
    email: "johndoe@example.com",
    profilePic: "/broken-image.jpg", // Replace with actual user image
  };

  return (
    <Box
      sx={{
        height: '100vh', // Full screen height
        width: '100vw',  // Full screen width
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f4f4f4', // Light background color
      }}
    >
      <Card sx={{ maxWidth: 400, padding: 3, textAlign: 'center' }}>
        <Avatar
          src={user.profilePic}
          sx={{ width: 100, height: 100, margin: '0 auto' }}
        />
        <CardContent>
          <Typography variant="h5">{user.name}</Typography>
          <Typography variant="body2" color="text.secondary">
            {user.email}
          </Typography>
        </CardContent>
        {/* <Button variant="contained" color="primary">Edit Profile</Button> */}
      </Card>
    </Box>
  );
};

export default Profile;
