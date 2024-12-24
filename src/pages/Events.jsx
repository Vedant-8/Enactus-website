import { events } from "../assets/data/eventsData.json";
import {
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  Box,
  Button,
} from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const Events = () => {
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
          Upcoming Events
        </Typography>

        {/* Grid Section for Events */}
        <Grid container spacing={3}>
          {events.map((event, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <div
                className="event-card-wrapper"
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  height: "100%",
                  width: "100%",
                }}
              >
                {/* Link to Event Detail Page */}
                <Link to={`/events/${event.id}`} style={{ textDecoration: "none" }}>
                  <Card
                    sx={{
                      borderRadius: 2,
                      boxShadow: 3,
                      "&:hover": {
                        transform: "scale(1.05)", // Scale-up effect on hover
                        boxShadow: 10, // Stronger shadow on hover
                        transition: "transform 0.3s ease, box-shadow 0.3s ease",
                        cursor: "pointer",
                      },
                    }}
                  >
                    <CardContent>
                      <Typography
                        variant="h6"
                        sx={{
                          fontWeight: "bold",
                          color: "black",
                          transition: "color 0.3s ease", // Smooth color transition
                        }}
                      >
                        {event.name}
                      </Typography>
                      <Typography
                        variant="body2"
                        color="text.secondary"
                        sx={{
                          transition: "color 0.3s ease", // Smooth color transition
                        }}
                      >
                        {event.date}
                      </Typography>
                      <Typography
                        variant="body1"
                        sx={{
                          marginBottom: 2,
                          color: "black", // Event overview text color
                          transition: "color 0.3s ease", // Smooth color transition
                        }}
                      >
                        {event.overview}
                      </Typography>
                      <Box display="flex" justifyContent="center">
                        <Button
                          variant="contained"
                          color="primary"
                          sx={{
                            borderRadius: 20,
                            backgroundColor: "#FFCC00", // Yellow button color
                            "&:hover": {
                              backgroundColor: "#FF9900", // Hover color for button
                            },
                            transition: "background-color 0.3s ease", // Smooth transition for hover
                          }}
                        >
                          Read More
                        </Button>
                      </Box>
                    </CardContent>
                  </Card>
                </Link>
              </div>
            </Grid>
          ))}
        </Grid>
      </Container>
    </div>
  );
};

export default Events;
