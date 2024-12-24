import { AppBar, Toolbar, Typography, Button, Container } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const theme = useTheme();

  return (
    <AppBar
      position="sticky"
      sx={{ backgroundColor: theme.palette.secondary.main }}
    >
      <Container maxWidth="lg">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            sx={{
              flexGrow: 1,
              fontWeight: "bold",
              color: theme.palette.primary.main,
            }}
          >
            Enactus SPIT
          </Typography>
          <div className="flex space-x-4">
            <Button
              component={Link}
              to="/"
              sx={{ color: theme.palette.primary.main }}
            >
              Home
            </Button>
            <Button
              component={Link}
              to="/projects"
              sx={{ color: theme.palette.primary.main }}
            >
              Projects
            </Button>
            <Button
              component={Link}
              to="/team"
              sx={{ color: theme.palette.primary.main }}
            >
              Team
            </Button>
            <Button
              component={Link}
              to="/events"
              sx={{ color: theme.palette.primary.main }}
            >
              Events
            </Button>
            <Button
              component={Link}
              to="/about"
              sx={{ color: theme.palette.primary.main }}
            >
              About
            </Button>
            <Button
              component={Link}
              to="/contact"
              sx={{ color: theme.palette.primary.main }}
            >
              Contact
            </Button>
          </div>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navbar;
