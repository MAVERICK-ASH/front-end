import React, { useState } from "react";
import { Box, Button, TextField, Typography } from "@mui/material";
import { Link } from "react-router-dom";

const Payment = () => {
  const product = {
    id: 1,
    title: "Sample Product",
    description: "This is a sample product description.",
    price: 500,
    image: "https://via.placeholder.com/150",
    category: "Category A",
  };

  // State to track form values
  const [cardNumber, setCardNumber] = useState("");
  const [pin, setPin] = useState("");

  // State to track form errors
  const [cardNumberError, setCardNumberError] = useState(false);
  const [pinError, setPinError] = useState(false);

  // Handle form submission
  const handleSubmit = () => {
    if (!cardNumber || !pin) {
      setCardNumberError(!cardNumber);
      setPinError(!pin);
    }
  };

  // Check if both fields are filled out
  const isFormValid = cardNumber && pin;

  return (
    <Box
      sx={{
        height: "100vh", // Full screen height
        width: "100vw", // Full screen width
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#f4f4f4", // Light background color
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          width: "100%",
          maxWidth: 400,
          padding: 3,
          gap: 2, // Adds spacing between elements
          backgroundColor: "#fff",
          borderRadius: 2,
          boxShadow: 3, // Subtle shadow for form
        }}
      >
        <Typography variant="h5" color="black" sx={{ textAlign: "center", marginBottom: 2 }}>
          Payment Details
        </Typography>
        
        {/* Card Number Input with Required Validation */}
        <TextField
          id="card-number"
          label="Card Number"
          variant="outlined"
          fullWidth
          required
          value={cardNumber}
          onChange={(e) => setCardNumber(e.target.value)}
          error={cardNumberError}
          helperText={cardNumberError ? "Card number is required" : ""}
        />
        
        {/* PIN Input with Required Validation */}
        <TextField
          id="pin"
          label="PIN"
          variant="outlined"
          type="password"
          fullWidth
          required
          value={pin}
          onChange={(e) => setPin(e.target.value)}
          error={pinError}
          helperText={pinError ? "PIN is required" : ""}
        />

        <Box sx={{ display: "flex", justifyContent: "center" }}>
          {/* Button only clickable if the form is valid */}
          <Link to={isFormValid ? "/cart" : "#"} state={{ product, orderCompleted: true }} style={{ textDecoration: "none" }}>
            <Button
              variant="contained"
              size="large"
              onClick={handleSubmit}
              disabled={!isFormValid} // Disable button if form is invalid
            >
              Order
            </Button>
          </Link>
        </Box>
      </Box>
    </Box>
  );
};

export default Payment;
