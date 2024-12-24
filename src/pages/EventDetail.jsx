import { events } from "../assets/data/eventsData.json";
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

const EventDetail = () => {
  const { eventId } = useParams(); // Get eventId from the URL
  const navigate = useNavigate();

  // Find the event by ID
  const event = events.find((event) => event.id === eventId);

  if (!event) {
    return (
      <Container sx={{ marginTop: 4 }}>
        <Typography variant="h4" color="text.secondary">
          Event not found.
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
          onClick={() => navigate("/events")}
          sx={{
            marginBottom: 2,
            color: "black", // White text color for button
            borderColor: "black", // White border for the button
            "&:hover": {
              backgroundColor: "#FFCC00", // Yellow hover color
              color: "black", // Black text color on hover
              borderColor: "#FFCC00", // Yellow border on hover
            },
          }}
        >
          Back to Events
        </Button>

        {/* Event Title */}
        <Box sx={{ marginBottom: 4 }}>
          <Typography
            variant="h4"
            sx={{
              fontWeight: "bold",
              color: "#FFCC00", // Yellow color for heading
            }}
          >
            {event.name}
          </Typography>
          <Typography
            variant="h6"
            color="text.secondary"
            sx={{
              color: "black", // White color for subheading
            }}
          >
            {event.date} | {event.venue}
          </Typography>
        </Box>

        {/* Event Overview Card */}
        <Card
          sx={{
            marginBottom: 4,
            backgroundColor: "#343a40", // Dark background for the card
            "&:hover": {
              boxShadow: 10, // Hover shadow effect
              transform: "scale(1.02)", // Slight scale-up effect
              transition: "transform 0.3s ease, box-shadow 0.3s ease",
            },
          }}
        >
          <CardContent>
            <Typography
              variant="h6"
              sx={{
                fontWeight: "bold",
                color: "#FFCC00", // Yellow for "Overview" heading
              }}
            >
              Overview
            </Typography>
            <Typography
              variant="body1"
              sx={{
                marginTop: 2,
                color: "white", // White text for the overview
              }}
            >
              {event.overview}
            </Typography>
          </CardContent>
        </Card>

        {/* Event Details (Key Information) Card */}
        <Card
          sx={{
            marginBottom: 4,
            backgroundColor: "#343a40", // Dark background for the card
            "&:hover": {
              boxShadow: 10, // Hover shadow effect
              transform: "scale(1.02)", // Slight scale-up effect
              transition: "transform 0.3s ease, box-shadow 0.3s ease",
            },
          }}
        >
          <CardContent>
            <Typography
              variant="h6"
              sx={{
                fontWeight: "bold",
                color: "#FFCC00", // Yellow for "Event Details" heading
              }}
            >
              Event Details
            </Typography>
            <ul>
              <li>
                <Typography variant="body1" sx={{ color: "white" }}>
                  <strong>Location: </strong>{event.location}
                </Typography>
              </li>
              <li>
                <Typography variant="body1" sx={{ color: "white" }}>
                  <strong>Time: </strong>{event.time}
                </Typography>
              </li>
            </ul>
          </CardContent>
        </Card>
      </Container>
    </div>
  );
};

export default EventDetail;
