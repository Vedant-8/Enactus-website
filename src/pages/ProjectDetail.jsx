import projectsData from "../assets/data/projectsData.json";
import {
  Container,
  Typography,
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
} from "@mui/material";
import React from "react";
import { useParams, useNavigate } from "react-router-dom";

const ProjectDetail = () => {
  const { projectId } = useParams(); // Get projectId from the URL
  const navigate = useNavigate();

  // Find the project by ID
  const project = projectsData.projects.find(
    (project) => project.id === projectId
  );

  if (!project) {
    return (
      <Container sx={{ marginTop: 4 }}>
        <Typography variant="h4" color="text.secondary">
          Project not found.
        </Typography>
      </Container>
    );
  }

  return (
    <div
      style={{
        background: "linear-gradient(to bottom, white, #000000)", // Gradient from white to black
        minHeight: "100vh",
      }}
    >
      <Container
        sx={{
          marginTop: 4,
          paddingBottom: "4rem", // Ensure space at the bottom for footer
          paddingTop: "2rem",
          borderRadius: "12px", // Optional: Adds rounded corners to the container
        }}
      >
        {/* Back Button */}
        <Button
          variant="outlined"
          onClick={() => navigate("/projects")}
          sx={{
            marginBottom: 2,
            color: "black", // Black text color for button
            borderColor: "black", // Black border for the button
            "&:hover": {
              backgroundColor: "#FFCC00", // Yellow hover color
              color: "black", // Black text color on hover
              borderColor: "#FFCC00", // Yellow border on hover
            },
          }}
        >
          Back to Projects
        </Button>

        {/* Project Title */}
        <Box sx={{ marginBottom: 4, textAlign: "center" }}>
          <Typography
            variant="h4"
            sx={{
              fontWeight: "bold",
              color: "#FFCC00", // Yellow color for heading
            }}
          >
            {project.name}
          </Typography>
          <Typography
            variant="h6"
            color="text.secondary"
            sx={{
              color: "black", // Black color for subheading
            }}
          >
            {project.date} | {project.venue}
          </Typography>
        </Box>

        {/* Project Photo */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            marginBottom: 4,
          }}
        >
          <CardMedia
            component="img"
            sx={{
              borderRadius: 2,
              maxHeight: 400,
              maxWidth: "100%",
              boxShadow: 3,
            }}
            image={project.photo} // Photo from project data
            alt={project.name}
          />
        </Box>

        {/* Unified Card with Objective, Overview, Outcomes */}
        <Card
          className="bg-dark"
          sx={{
            backgroundColor: "#343a40", // Dark background
            color: "white",
            marginBottom: 4,
            padding: 2,
            borderRadius: 2,
            boxShadow: 3,
          }}
        >
          <CardContent>
            {/* Objective Section */}
            <Typography
              variant="h6"
              sx={{
                fontWeight: "bold",
                color: "#FFCC00", // Yellow for headings
                marginBottom: 2,
              }}
            >
              Objective
            </Typography>
            <Typography
              variant="body1"
              sx={{
                marginBottom: 4,
              }}
            >
              {project.objective}
            </Typography>

            {/* Overview Section */}
            <Typography
              variant="h6"
              sx={{
                fontWeight: "bold",
                color: "#FFCC00", // Yellow for headings
                marginBottom: 2,
              }}
            >
              Overview
            </Typography>
            <Typography
              variant="body1"
              sx={{
                marginBottom: 4,
              }}
            >
              {project.overview}
            </Typography>

            {/* Key Outcomes Section */}
            <Typography
              variant="h6"
              sx={{
                fontWeight: "bold",
                color: "#FFCC00", // Yellow for headings
                marginBottom: 2,
              }}
            >
              Key Outcomes
            </Typography>
            <ul>
              {Object.entries(project.keyOutcomes).map(([key, value]) => (
                <li key={key}>
                  <Typography variant="body1">{`${key}: ${value}`}</Typography>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </Container>
    </div>
  );
};

export default ProjectDetail;
