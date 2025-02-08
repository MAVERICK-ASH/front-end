import React from "react";
import { useLocation, Link } from "react-router-dom"; // Import Link for navigation
import { Box, Typography, Button, Card, CardContent, CardMedia } from "@mui/material";

const Cart = () => {
  const location = useLocation();
  const { product, orderCompleted } = location.state || {}; // Destructure product data and orderCompleted flag

  // If no product data is passed, show a fallback message
  if (!product) {
    return (
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          minHeight: "100vh",
          backgroundColor: "#f4f4f4",
        }}
      >
        <Typography variant="h6">No product selected. Please go back and choose a product.</Typography>
      </Box>
    );
  }

  return (
    <Box
      sx={{
        height: "100vh", // Full screen height
        width: "100vw", // Full screen width
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#f4f4f4", // Light gray background
        padding: 4,
      }}
    >
      {/* Title of Cart */}
      <Typography variant="h5" color="black" sx={{ textAlign: "center", marginBottom: 2 }}>
        Cart
      </Typography>

      {/* Display the selected product in a Card */}
      <Card sx={{ maxWidth: 345, marginBottom: 2 }}>
        <CardMedia sx={{ height: 180 }} image={product.image} title={product.title} />
        <CardContent>
          <Typography gutterBottom variant="h6" noWrap>
            {product.title}
          </Typography>
          <Typography variant="subtitle2" color="text.secondary">
            {product.category}
          </Typography>
          <Typography variant="body2" color="text.secondary" sx={{ height: 50, overflow: "hidden", textOverflow: "ellipsis" }}>
            {product.description}
          </Typography>
          <Typography variant="h6">₹{product.price}</Typography>
        </CardContent>
      </Card>

      {/* Order Completed Message */}
      {orderCompleted && (
        <Typography variant="h6" color="primary" sx={{ marginBottom: 2 }}>
          Order Completed! Thank you for your purchase.
        </Typography>
      )}

      {/* Proceed to Checkout Button */}
      <Box sx={{ display: "flex", justifyContent: "center", width: "100%" }}>
        <Link to='/pay' style={{ textDecoration: "none" }}>
          <Button variant="contained" size="large" sx={{ width: "auto" }}>
            Proceed to Checkout
          </Button>
        </Link>
      </Box>
    </Box>
  );
};

export default Cart;
