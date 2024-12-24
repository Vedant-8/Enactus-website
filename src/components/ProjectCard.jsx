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
      sx={{
        maxWidth: 345,
        marginBottom: 2,
        borderRadius: 2,
        boxShadow: 3,
        backgroundColor: "#343a40", // Dark background for the card
        transition: "transform 0.3s ease, box-shadow 0.3s ease", // Hover animation
        "&:hover": {
          boxShadow: 12, // Increased shadow on hover
          transform: "scale(1.05)", // Slight zoom effect on hover
        },
      }}
    >
      {/* Card Image */}
      <CardMedia
        component="img"
        height="140"
        image={project.imageUrl} // Assuming you have imageUrl in your project data
        alt={project.name}
      />

      {/* Card Content */}
      <CardContent
        sx={{
          backgroundColor: "#343a40", // Dark background for content
          color: "white", // White text color
        }}
      >
        {/* Project Title */}
        <Typography
          variant="h6"
          component="div"
          sx={{
            fontWeight: "bold",
            color: "#FFCC00", // Yellow color for title
          }}
        >
          {project.name}
        </Typography>

        {/* Date & Venue */}
        <Typography
          variant="body2"
          color="text.secondary"
          sx={{
            marginTop: 1,
            color: "white", // White text for date and venue
          }}
        >
          {project.date} | {project.venue}
        </Typography>

        {/* Project Overview */}
        <Typography
          variant="body2"
          sx={{
            marginTop: 2,
            color: "white", // White color for overview text
          }}
        >
          {project.overview.length > 150
            ? `${project.overview.substring(0, 150)}...`
            : project.overview}
        </Typography>

        {/* Learn More Button */}
        <Box sx={{ display: "flex", justifyContent: "flex-end", marginTop: 2 }}>
          <Button
            variant="contained"
            color="secondary"
            onClick={() => navigate(`/projects/${project.id}`)} // Navigates to the project detail page
            sx={{
              backgroundColor: "#FFCC00", // Yellow button
              color: "black", // Black text color for button
              "&:hover": {
                backgroundColor: "#e6b800", // Darker yellow on hover
              },
            }}
          >
            Learn More
          </Button>
        </Box>
      </CardContent>
    </Card>
  );
};

export default ProjectCard;
