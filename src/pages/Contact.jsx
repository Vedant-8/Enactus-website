import {
  Container,
  Typography,
  Box,
  TextField,
  Button,
  Grid,
  Paper,
} from "@mui/material";
import React from "react";

const Contact = () => {
  return (
    <div
      style={{
        background: "black", // Gradient background from white to dark gray
        minHeight: "100vh", // Full screen height
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        paddingBottom: "4rem", // Space at the bottom
      }}
    >
      <Container sx={{ marginTop: 4 }}>
        {/* Heading */}
        <Typography
          variant="h4"
          sx={{
            fontWeight: "bold",
            color: "#FFCC00", // Yellow color for heading
            marginBottom: 4,
            textAlign: "center", // Center align the heading
          }}
        >
          Contact Us
        </Typography>

        <Grid container spacing={4} justifyContent="center">
          {/* Contact Form */}
          <Grid item xs={12} sm={6} md={4}>
            <Paper
              sx={{
                padding: 3,
                boxShadow: 6,
                borderRadius: 2,
                backgroundColor: "#ffffff",
                transition: "transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out", // Add hover effect
                "&:hover": {
                  transform: "scale(1.05)", // Scale effect on hover
                  boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.2)", // Enhanced shadow on hover
                },
                height: "100%", // Ensure consistent card height
              }}
            >
              <Typography
                variant="h6"
                sx={{ fontWeight: "bold", color: "black", marginBottom: 2 }}
              >
                Get in Touch
              </Typography>
              <Box sx={{ marginTop: 2 }}>
                <TextField
                  label="Your Name"
                  fullWidth
                  variant="outlined"
                  sx={{ marginBottom: 2 }}
                />
                <TextField
                  label="Your Email"
                  type="email"
                  fullWidth
                  variant="outlined"
                  sx={{ marginBottom: 2 }}
                />
                <TextField
                  label="Your Message"
                  fullWidth
                  variant="outlined"
                  multiline
                  rows={4}
                  sx={{ marginBottom: 2 }}
                />
                <Button
                  variant="contained"
                  color="primary"
                  fullWidth
                  sx={{
                    marginTop: 2,
                    borderRadius: 20, // Rounded button
                    backgroundColor: "#FFCC00", // Yellow button color
                    "&:hover": {
                      backgroundColor: "#FFB800", // Slightly darker yellow on hover
                    },
                  }}
                >
                  Send Message
                </Button>
              </Box>
            </Paper>
          </Grid>

          {/* Contact Information */}
          <Grid item xs={12} sm={6} md={4}>
            <Paper
              sx={{
                padding: 3,
                boxShadow: 6,
                borderRadius: 2,
                backgroundColor: "#ffffff",
                transition: "transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out", // Add hover effect
                "&:hover": {
                  transform: "scale(1.05)", // Scale effect on hover
                  boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.2)", // Enhanced shadow on hover
                },
                height: "100%", // Ensure consistent card height
              }}
            >
              <Typography
                variant="h6"
                sx={{ fontWeight: "bold", color: "black", marginBottom: 2 }}
              >
                Contact Information
              </Typography>
              <Box sx={{ marginTop: 2 }}>
                <Typography variant="body1" sx={{ marginBottom: 1 }}>
                  <strong>Email:</strong> enactusspit@gmail.com
                </Typography>
                <Typography variant="body1" sx={{ marginBottom: 1 }}>
                  <strong>Phone:</strong> +91 9876543210
                </Typography>
                <Typography variant="body1" sx={{ marginBottom: 1 }}>
                  <strong>Address:</strong> Sardar Patel Institute of Technology,
                  Mumbai, India
                </Typography>
              </Box>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default Contact;
