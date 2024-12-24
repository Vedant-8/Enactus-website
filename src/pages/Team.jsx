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
          Meet the Team
        </Typography>

        {/* Grid Section for Team Members */}
        <Grid container spacing={4}>
          {teamMembers.map((member, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Card
                sx={{
                  borderRadius: 2,
                  boxShadow: 3,
                  "&:hover": {
                    transform: "scale(1.05)", // Scale up effect
                    boxShadow: 10, // Add shadow on hover
                    transition: "transform 0.3s ease, box-shadow 0.3s ease",
                    backgroundColor: "EFF3EA", // Highlight background on hover
                    cursor: "pointer",
                  },
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    marginTop: 2,
                    transition: "transform 0.3s ease",
                  }}
                >
                  <Avatar
                    alt={member.name}
                    src={member.photo}
                    sx={{
                      width: 120,
                      height: 120,
                      borderRadius: "50%",
                      boxShadow: 3,
                      transition: "transform 0.3s ease",
                    }}
                  />
                </Box>
                <CardContent sx={{ textAlign: "center" }}>
                  <Typography
                    variant="h6"
                    sx={{
                      fontWeight: "bold",
                      color: "black",
                      transition: "color 0.3s ease",
                    }}
                  >
                    {member.name}
                  </Typography>
                  <Typography
                    variant="body1"
                    color="text.secondary"
                    sx={{
                      transition: "color 0.3s ease",
                    }}
                  >
                    {member.role}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </div>
  );
};

export default Team;
