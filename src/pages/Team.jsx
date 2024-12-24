import { teamMembers } from "../assets/data/teamData.json";
import {
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  Avatar,
  Box,
} from "@mui/material";
import React from "react";

// Importing the team data

const Team = () => {
  return (
    <Container sx={{ marginTop: 4 }}>
      <Typography
        variant="h4"
        sx={{ fontWeight: "bold", color: "black", marginBottom: 4 }}
      >
        Meet the Team
      </Typography>

      <Grid container spacing={4}>
        {teamMembers.map((member, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card sx={{ borderRadius: 2, boxShadow: 3 }}>
              <Box
                sx={{ display: "flex", justifyContent: "center", marginTop: 2 }}
              >
                <Avatar
                  alt={member.name}
                  src={member.photo}
                  sx={{ width: 120, height: 120, borderRadius: "50%" }}
                />
              </Box>
              <CardContent sx={{ textAlign: "center" }}>
                <Typography
                  variant="h6"
                  sx={{ fontWeight: "bold", color: "black" }}
                >
                  {member.name}
                </Typography>
                <Typography variant="body1" color="text.secondary">
                  {member.role}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Team;
