import { AppBar, Toolbar, Button, Container, Box } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import React from "react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const theme = useTheme();
  const location = useLocation(); // To track the current page

  return (
    <AppBar position="sticky" sx={{ backgroundColor: "#000" }}>
      <Container maxWidth="lg">
        <Toolbar disableGutters>
          {/* Clickable Logo */}
          <Box sx={{ flexGrow: 1 }}>
            <Link to="/" style={{ display: "inline-block" }}>
              <img
                src="/images/logos/logo3.png"
                alt="Enactus Logo"
                style={{
                  height: "40px",
                  transition: "transform 0.3s ease",
                }}
                onMouseOver={(e) => (e.target.style.transform = "scale(1.1)")}
                onMouseOut={(e) => (e.target.style.transform = "scale(1)")}
              />
            </Link>
          </Box>

          {/* Navigation Links */}
          <Box display="flex" gap={2}>
            {[
              { label: "Home", path: "/" },
              { label: "Projects", path: "/projects" },
              { label: "Team", path: "/team" },
              { label: "Events", path: "/events" },
              { label: "About", path: "/about" },
              { label: "Contact", path: "/contact" },
            ].map((item) => (
              <Button
                key={item.label}
                component={Link}
                to={item.path}
                sx={{
                  color: location.pathname === item.path ? "#FFCC00" : "#fff",
                  fontWeight:
                    location.pathname === item.path ? "bold" : "normal",
                  transition: "all 0.3s ease",
                  "&:hover": {
                    color: "#FFCC00",
                    transform: "scale(1.05)",
                  },
                }}
              >
                {item.label}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navbar;
