import { Container, Typography, Box, Grid, Paper } from "@mui/material";
import React from "react";

const About = () => {
  return (
    <Container sx={{ marginTop: 4 }}>
      <Typography
        variant="h4"
        sx={{ fontWeight: "bold", color: "black", marginBottom: 4 }}
      >
        About Enactus SPIT
      </Typography>

      <Grid container spacing={4}>
        <Grid item xs={12} sm={6}>
          <Paper sx={{ padding: 3, boxShadow: 3, borderRadius: 2 }}>
            <Typography
              variant="h6"
              sx={{ fontWeight: "bold", color: "black" }}
            >
              Our Mission
            </Typography>
            <Typography
              variant="body1"
              color="text.secondary"
              sx={{ marginTop: 2 }}
            >
              At Enactus SPIT, our mission is to create a world where students
              and communities thrive through social entrepreneurship. We aim to
              build sustainable projects that empower individuals, improve
              livelihoods, and contribute to the achievement of the UN's
              Sustainable Development Goals (SDGs).
            </Typography>
          </Paper>
        </Grid>

        <Grid item xs={12} sm={6}>
          <Paper sx={{ padding: 3, boxShadow: 3, borderRadius: 2 }}>
            <Typography
              variant="h6"
              sx={{ fontWeight: "bold", color: "black" }}
            >
              Our Vision
            </Typography>
            <Typography
              variant="body1"
              color="text.secondary"
              sx={{ marginTop: 2 }}
            >
              We envision a future where students become catalysts for change,
              driving innovation and sustainable impact through the power of
              social entrepreneurship. Enactus SPIT empowers students to lead
              initiatives that create positive change in the world.
            </Typography>
          </Paper>
        </Grid>
      </Grid>

      <Box sx={{ marginTop: 4 }}>
        <Typography variant="h6" sx={{ fontWeight: "bold", color: "black" }}>
          Our Values
        </Typography>
        <Typography
          variant="body1"
          color="text.secondary"
          sx={{ marginTop: 2 }}
        >
          At Enactus SPIT, we uphold the values of integrity, accountability,
          and teamwork. We believe in the power of collaboration, innovation,
          and making a meaningful impact on society. We are committed to working
          together to create a better future for all.
        </Typography>
      </Box>
    </Container>
  );
};

export default About;
