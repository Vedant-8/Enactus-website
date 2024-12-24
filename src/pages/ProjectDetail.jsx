import projectsData from "../assets/data/projectsData.json";
import {
  Container,
  Typography,
  Box,
  Button,
  Card,
  CardContent,
} from "@mui/material";
import React from "react";
import { useParams, useNavigate } from "react-router-dom";

// Importing the project data

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
    <Container sx={{ marginTop: 4 }}>
      <Button
        variant="outlined"
        onClick={() => navigate("/projects")}
        sx={{ marginBottom: 2 }}
      >
        Back to Projects
      </Button>

      <Box sx={{ marginBottom: 4 }}>
        <Typography variant="h4" sx={{ fontWeight: "bold", color: "black" }}>
          {project.name}
        </Typography>
        <Typography variant="h6" color="text.secondary">
          {project.date} | {project.venue}
        </Typography>
      </Box>

      <Card sx={{ marginBottom: 4 }}>
        <CardContent>
          <Typography variant="h6" sx={{ fontWeight: "bold", color: "black" }}>
            Overview
          </Typography>
          <Typography variant="body1" sx={{ marginTop: 2 }}>
            {project.overview}
          </Typography>
        </CardContent>
      </Card>

      <Card sx={{ marginBottom: 4 }}>
        <CardContent>
          <Typography variant="h6" sx={{ fontWeight: "bold", color: "black" }}>
            Key Outcomes
          </Typography>
          <ul>
            {Object.entries(project.keyOutcomes).map(([key, value]) => (
              <li key={key}>
                <Typography variant="body1">
                  <strong>{key}: </strong>
                  {value}
                </Typography>
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>
    </Container>
  );
};

export default ProjectDetail;
