import { Facebook, Instagram, Twitter, LinkedIn } from "@mui/icons-material";
import { Box, Typography, Link, IconButton } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import React from "react";

const Footer = () => {
  const theme = useTheme();

  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: theme.palette.secondary.main,
        color: theme.palette.primary.main,
        padding: "20px 0",
        textAlign: "center",
      }}
    >
      <Typography variant="body2" component="p" sx={{ marginBottom: 2 }}>
        © 2024 Enactus SPIT. All rights reserved.
      </Typography>

      <Box sx={{ marginBottom: 2 }}>
        <Typography variant="body1" component="p">
          Follow us on:
        </Typography>
        <Box sx={{ display: "flex", justifyContent: "center", marginTop: 1 }}>
          <IconButton color="inherit" href="https://facebook.com">
            <Facebook />
          </IconButton>
          <IconButton color="inherit" href="https://instagram.com">
            <Instagram />
          </IconButton>
          <IconButton color="inherit" href="https://twitter.com">
            <Twitter />
          </IconButton>
          <IconButton color="inherit" href="https://linkedin.com">
            <LinkedIn />
          </IconButton>
        </Box>
      </Box>

      <Box>
        <Typography variant="body2">
          For inquiries, email us at:
          <Link href="mailto:info@enactusschool.com" color="inherit">
            info@enactusschool.com
          </Link>
        </Typography>
      </Box>
    </Box>
  );
};

export default Footer;
