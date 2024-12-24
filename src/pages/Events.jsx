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

// Importing the events data

const Events = () => {
  return (
    <Container sx={{ marginTop: 4 }}>
      <Typography
        variant="h4"
        sx={{ fontWeight: "bold", color: "black", marginBottom: 4 }}
      >
        Upcoming Events
      </Typography>

      <Grid container spacing={4}>
        {events.map((event, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card sx={{ borderRadius: 2, boxShadow: 3 }}>
              <CardContent>
                <Typography
                  variant="h6"
                  sx={{ fontWeight: "bold", color: "black" }}
                >
                  {event.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {event.date}
                </Typography>
                <Typography variant="body1" sx={{ marginBottom: 2 }}>
                  {event.overview}
                </Typography>
                <Box display="flex" justifyContent="center">
                  <Link to={`/events/${event.id}`}>
                    <Button
                      variant="contained"
                      color="primary"
                      sx={{ borderRadius: 20 }}
                    >
                      Read More
                    </Button>
                  </Link>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Events;
