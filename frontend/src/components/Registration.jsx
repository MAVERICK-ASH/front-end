import React, { useState } from "react";
import { Button, TextField, FormControl, FormLabel, RadioGroup, FormControlLabel, Radio, Box, Typography } from "@mui/material";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Registration = () => {
  const [input, setInput] = useState({
    name: "",
    email: "",
    password: "",
    gender: "",
  });

  const navigate = useNavigate();

  // Handle input changes
  const inputHandler = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  // Form validation
  const validateForm = () => {
    const { name, email, password, gender } = input;
    if (!name || !email || !password || !gender) {
      alert("All fields are required!");
      return false;
    }
    if (!/\S+@\S+\.\S+/.test(email)) {
      alert("Invalid email format!");
      return false;
    }
    if (password.length < 6) {
      alert("Password must be at least 6 characters long!");
      return false;
    }
    return true;
  };

  // Handle registration
  const registerHandler = async (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    console.log("Sending data to backend:", input);

    try {
      const res = await axios.post("http://localhost:5000/reg", input, {
        headers: { "Content-Type": "application/json" },
      });
      console.log("Response received:", res.data);
      alert(res.data.message);
      navigate("/login"); // Navigate to login page on success
    } catch (err) {
      console.error("Error during registration:", err);
      alert("Registration failed! Please try again.");
    }
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh", // Full viewport height
        width: "100vw", // Full viewport width
        backgroundColor: "#f4f4f4", // Light background
      }}
    >
      <Box
        component="form"
        sx={{
          display: "flex",
          flexDirection: "column",
          maxWidth: 500,
          width: "90%", // Ensures responsiveness
          padding: 4,
          boxShadow: 5, // Elevates the form
          borderRadius: 2, // Smooth edges
          backgroundColor: "white",
          gap: 2, // Spacing between fields
        }}
        onSubmit={registerHandler}
      >
        <Typography variant="h5" color="black" sx={{ textAlign: "center", marginBottom: 2 }}>
                         Sign Up
                       </Typography>
        <TextField label="Name" name="name" value={input.name} onChange={inputHandler} fullWidth required />
        <TextField label="Email" name="email" type="email" value={input.email} onChange={inputHandler} fullWidth required />
        <TextField label="Password" name="password" type="password" value={input.password} onChange={inputHandler} fullWidth required />

        <FormControl component="fieldset">
          <FormLabel component="legend">Gender</FormLabel>
          <RadioGroup row name="gender" value={input.gender} onChange={inputHandler}>
            <FormControlLabel value="female" control={<Radio />} label="Female" />
            <FormControlLabel value="male" control={<Radio />} label="Male" />
            <FormControlLabel value="other" control={<Radio />} label="Other" />
          </RadioGroup>
        </FormControl>

        <Button type="submit" variant="contained" fullWidth>
          Register
        </Button>
        <Typography variant="body2" align="center">
          By continuing, you agree to our Terms of Service and Privacy Policy.
        </Typography>
      </Box>
    </Box>
  );
};

export default Registration;
