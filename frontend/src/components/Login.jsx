import { Box, Button, TextField, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh", // Covers full viewport height
        width: "100vw", // Covers full viewport width
        backgroundColor: "#f4f4f4", // Light gray background
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          maxWidth: 400,
          width: "90%", // Ensures responsiveness
          padding: 4,
          boxShadow: 5, // Elevates the form
          borderRadius: 2, // Smooth edges
          backgroundColor: "white",
          gap: 2, // Spacing between fields
        }}
      >
         <Typography variant="h5" color="black" sx={{ textAlign: "center", marginBottom: 2 }}>
                  Login
                </Typography>
        
        <TextField id="email" label="Email ID" variant="outlined" fullWidth />
        <TextField id="password" label="Password" variant="outlined" type="password" fullWidth />

        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <Link to="/pro" style={{ textDecoration: "none" }}>
            <Button variant="contained" fullWidth>Login</Button>
          </Link>
        </Box>
      </Box>
    </Box>
  );
};

export default Login;
