import { events } from "../assets/data/eventsData.json";
import {
  Container,
  Typography,
  Card,
  CardContent,
  Button,
  Box,
} from "@mui/material";
import React from "react";
import { useParams } from "react-router-dom";

const EventDetail = () => {
  const { eventId } = useParams();
  const event = events.find((event) => event.id === eventId);

  if (!event) {
    return <Typography variant="h6">Event not found!</Typography>;
  }

  return (
    <Container sx={{ marginTop: 4 }}>
      <Card sx={{ borderRadius: 2, boxShadow: 3 }}>
        <CardContent>
          <Typography
            variant="h4"
            sx={{ fontWeight: "bold", color: "black", marginBottom: 2 }}
          >
            {event.name}
          </Typography>
          <Typography
            variant="h6"
            color="text.secondary"
            sx={{ marginBottom: 2 }}
          >
            {event.date}
          </Typography>
          <Typography variant="body1" sx={{ marginBottom: 4 }}>
            {event.overview}
          </Typography>
          <Box display="flex" justifyContent="center">
            <Button
              variant="contained"
              color="primary"
              sx={{ borderRadius: 20 }}
            >
              Register Now
            </Button>
          </Box>
        </CardContent>
      </Card>
    </Container>
  );
};

export default EventDetail;
