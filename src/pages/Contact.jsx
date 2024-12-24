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
    <Container sx={{ marginTop: 4 }}>
      <Typography
        variant="h4"
        sx={{ fontWeight: "bold", color: "black", marginBottom: 4 }}
      >
        Contact Us
      </Typography>

      <Grid container spacing={4}>
        <Grid item xs={12} sm={6}>
          <Paper sx={{ padding: 3, boxShadow: 3, borderRadius: 2 }}>
            <Typography
              variant="h6"
              sx={{ fontWeight: "bold", color: "black" }}
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
                sx={{ marginTop: 2 }}
              >
                Send Message
              </Button>
            </Box>
          </Paper>
        </Grid>

        <Grid item xs={12} sm={6}>
          <Paper sx={{ padding: 3, boxShadow: 3, borderRadius: 2 }}>
            <Typography
              variant="h6"
              sx={{ fontWeight: "bold", color: "black" }}
            >
              Contact Information
            </Typography>
            <Typography variant="body1" sx={{ marginTop: 2 }}>
              <strong>Email:</strong> enactus@spit.ac.in
            </Typography>
            <Typography variant="body1" sx={{ marginTop: 1 }}>
              <strong>Phone:</strong> +91 9876543210
            </Typography>
            <Typography variant="body1" sx={{ marginTop: 1 }}>
              <strong>Address:</strong> Sardar Patel Institute of Technology,
              Mumbai, India
            </Typography>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Contact;
