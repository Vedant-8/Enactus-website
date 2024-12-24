import { Facebook, Instagram, Twitter, LinkedIn } from "@mui/icons-material";
import { Box, Typography, Link, IconButton } from "@mui/material";
import React from "react";

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: "#000", // Black background
        color: "#fff", // White text
        padding: "20px 0",
        textAlign: "center",
      }}
    >
      {/* Copyright Text */}
      <Typography
        variant="body2"
        component="p"
        sx={{
          marginBottom: 2,
          transition: "color 0.3s ease",
          "&:hover": { color: "#FFCC00" }, // Yellow on hover
        }}
      >
        © 2024 Enactus SPIT. All rights reserved.
      </Typography>

      {/* Social Media Links */}
      <Box sx={{ marginBottom: 2 }}>
        <Typography
          variant="body1"
          component="p"
          sx={{
            transition: "color 0.3s ease",
            "&:hover": { color: "#FFCC00" }, // Yellow on hover
          }}
        >
          Follow us on:
        </Typography>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            marginTop: 1,
            gap: 2, // Space between icons
          }}
        >
          {[
            { href: "https://facebook.com", icon: <Facebook /> },
            { href: "https://instagram.com", icon: <Instagram /> },
            { href: "https://twitter.com", icon: <Twitter /> },
            { href: "https://linkedin.com", icon: <LinkedIn /> },
          ].map((social, index) => (
            <IconButton
              key={index}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              sx={{
                color: "#fff", // White icons
                transition: "color 0.3s ease, transform 0.3s ease",
                "&:hover": {
                  color: "#FFCC00", // Yellow on hover
                  transform: "scale(1.2)", // Slight scaling on hover
                },
              }}
            >
              {social.icon}
            </IconButton>
          ))}
        </Box>
      </Box>

      {/* Contact Info */}
      <Box>
        <Typography variant="body2">
          For inquiries, email us at:{" "}
          <Link
            href="mailto:info@enactusschool.com"
            color="inherit"
            sx={{
              textDecoration: "none",
              transition: "color 0.3s ease",
              "&:hover": { color: "#FFCC00" }, // Yellow on hover
            }}
          >
            enactusspit@gmail.com
          </Link>
        </Typography>
      </Box>
    </Box>
  );
};

export default Footer;
