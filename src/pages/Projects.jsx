import projectsData from "../assets/data/projectsData.json";
import ProjectCard from "../components/ProjectCard";
import { Grid, Container, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const Projects = () => {
  return (
    <div
      className="bg-gradient-to-b"
      style={{
        minHeight: "100vh",
        background: "linear-gradient(to bottom, white, #000000)", // Gradient from white to black
      }}
    >
      <Container sx={{ marginTop: 4, paddingBottom: "4rem" }}>
        {/* Heading Section */}
        <Typography
          variant="h4"
          sx={{
            fontWeight: "bold",
            color: "black", // Yellow color for heading
            marginBottom: 4,
            textAlign: "center",
          }}
        >
          Our Projects
        </Typography>

        {/* Grid Section for Projects */}
        <Grid container spacing={3}>
          {projectsData.projects.map((project) => (
            <Grid item xs={12} sm={6} md={4} key={project.name}>
              <div
                className="project-card-wrapper"
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  height: "100%",
                  width: "100%",
                }}
              >
                {/* Wrap ProjectCard with Link */}
                <Link to={`/projects/${project.id}`} style={{ textDecoration: 'none' }}>
                  <ProjectCard project={project} />
                </Link>
              </div>
            </Grid>
          ))}
        </Grid>
      </Container>
    </div>
  );
};

export default Projects;
