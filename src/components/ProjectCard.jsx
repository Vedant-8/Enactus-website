import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Button,
  Box,
} from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";

const ProjectCard = ({ project }) => {
  const navigate = useNavigate();

  return (
    <Card
      sx={{ maxWidth: 345, marginBottom: 2, borderRadius: 2, boxShadow: 3 }}
    >
      <CardMedia
        component="img"
        height="140"
        image={project.imageUrl} // Assuming you have imageUrl in your project data
        alt={project.name}
      />
      <CardContent sx={{ backgroundColor: "#f5f5f5" }}>
        <Typography
          variant="h6"
          component="div"
          sx={{ fontWeight: "bold", color: "black" }}
        >
          {project.name}
        </Typography>
        <Typography
          variant="body2"
          color="text.secondary"
          sx={{ marginTop: 1 }}
        >
          {project.date} | {project.venue}
        </Typography>
        <Typography variant="body2" sx={{ marginTop: 2 }}>
          {project.overview.length > 150
            ? `${project.overview.substring(0, 150)}...`
            : project.overview}
        </Typography>
        <Box sx={{ display: "flex", justifyContent: "flex-end", marginTop: 2 }}>
          <Button
            variant="contained"
            color="secondary"
            onClick={() => navigate(`/projects/${project.id}`)} // Navigates to the project detail page
          >
            Learn More
          </Button>
        </Box>
      </CardContent>
    </Card>
  );
};

export default ProjectCard;
