import projectsData from "../assets/data/projectsData.json";
import ProjectCard from "../components/ProjectCard";
import { Grid, Container, Typography } from "@mui/material";
import React from "react";

// Importing the project data

const Projects = () => {
  return (
    <Container sx={{ marginTop: 4 }}>
      <Typography
        variant="h4"
        sx={{ fontWeight: "bold", color: "black", marginBottom: 4 }}
      >
        Our Projects
      </Typography>

      <Grid container spacing={3}>
        {projectsData.projects.map((project) => (
          <Grid item xs={12} sm={6} md={4} key={project.name}>
            <ProjectCard project={project} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Projects;
