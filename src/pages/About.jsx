import { Container, Typography, Box, Grid, Paper } from "@mui/material";
import React from "react";

const About = () => {
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
          About Enactus SPIT
        </Typography>

        {/* Grid for Mission and Vision */}
        <Grid container spacing={4} justifyContent="center">
          {/* Mission */}
          <Grid item xs={12} sm={6} md={4}>
            <Paper
              sx={{
                padding: 3,
                boxShadow: 6,
                borderRadius: 2,
                backgroundColor: "#ffffff",
                transition: "transform 0.3s ease-in-out", // Add hover effect
                "&:hover": {
                  transform: "scale(1.05)", // Scale effect on hover
                },
                height: "100%", // Ensure consistent card height
              }}
            >
              <Typography
                variant="h6"
                sx={{ fontWeight: "bold", color: "black", marginBottom: 2 }}
              >
                Our Mission
              </Typography>
              <Typography variant="body1" color="text.secondary">
                At Enactus SPIT, our mission is to create a world where students
                and communities thrive through social entrepreneurship. We aim to
                build sustainable projects that empower individuals, improve
                livelihoods, and contribute to the achievement of the UN's
                Sustainable Development Goals (SDGs).
              </Typography>
            </Paper>
          </Grid>

          {/* Vision */}
          <Grid item xs={12} sm={6} md={4}>
            <Paper
              sx={{
                padding: 3,
                boxShadow: 6,
                borderRadius: 2,
                backgroundColor: "#ffffff",
                transition: "transform 0.3s ease-in-out", // Add hover effect
                "&:hover": {
                  transform: "scale(1.05)", // Scale effect on hover
                },
                height: "100%", // Ensure consistent card height
              }}
            >
              <Typography
                variant="h6"
                sx={{ fontWeight: "bold", color: "black", marginBottom: 2 }}
              >
                Our Vision
              </Typography>
              <Typography variant="body1" color="text.secondary">
                We envision a future where students become catalysts for change,
                driving innovation and sustainable impact through the power of
                social entrepreneurship. Enactus SPIT empowers students to lead
                initiatives that create positive change in the world.
              </Typography>
            </Paper>
          </Grid>
        </Grid>

        {/* Values Section */}
        <Grid container spacing={4} justifyContent="center" sx={{ marginTop: 4 }}>
          <Grid item xs={12} sm={6} md={4}>
            <Paper
              sx={{
                padding: 3,
                boxShadow: 6,
                borderRadius: 2,
                backgroundColor: "#ffffff",
                transition: "transform 0.3s ease-in-out", // Add hover effect
                "&:hover": {
                  transform: "scale(1.05)", // Scale effect on hover
                },
                height: "100%", // Ensure consistent card height
              }}
            >
              <Typography
                variant="h6"
                sx={{ fontWeight: "bold", color: "black", marginBottom: 2 }}
              >
                Our Values
              </Typography>
              <Typography variant="body1" color="text.secondary">
                At Enactus SPIT, we uphold the values of integrity, accountability,
                and teamwork. We believe in the power of collaboration, innovation,
                and making a meaningful impact on society. We are committed to working
                together to create a better future for all.
              </Typography>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default About;
