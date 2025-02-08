import React, { useState, useEffect } from "react";
import { Card, CardActions, CardContent, CardMedia, Button, Typography, Grid, Box, CircularProgress, Alert } from "@mui/material";
import axios from "axios";
import { Link } from "react-router-dom";
import Hero from "./hero";
import { assets } from '../assets/assets';

const Home = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((res) => {
        setData(res.data);
        setLoading(false);
      })
      .catch((err) => {
        setError("Error fetching data.");
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh" }}>
        <CircularProgress />
      </Box>
    );
  }

  if (error) {
    return (
      <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh" }}>
        <Alert severity="error">{error}</Alert>
      </Box>
    );
  }

  return (
    <div>
      <Hero />
      <Box
        sx={{
          minHeight: "100vh",
          width: "100vw",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          padding: 4,
          backgroundColor: "#f4f4f4",
        }}
      >
        <Grid container spacing={2} justifyContent="center">
          {data.map((val) => (
            <Grid item xs={12} sm={6} md={4} lg={3} key={val.id}>
              <Card sx={{ maxWidth: "100%", height: "100%", display: "flex", flexDirection: "column" }}>
                <CardMedia sx={{ height: 180 }} image={val.image} title={val.title} />
                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography gutterBottom variant="h6" noWrap>
                    {val.title}
                  </Typography>
                  <Typography variant="subtitle2" color="text.secondary">
                    {val.category}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" sx={{ height: 50, overflow: "hidden", textOverflow: "ellipsis" }}>
                    {val.description}
                  </Typography>
                  <Typography variant="h6">₹{val.price}</Typography>
                </CardContent>
                <CardActions sx={{ justifyContent: "center" }}>
                  <Link to="/cart" state={{ product: val }} style={{ textDecoration: "none" }}>
                    <Button variant="contained">Buy</Button>
                  </Link>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    </div>
  );
};

export default Home;
