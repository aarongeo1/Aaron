import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import { useTheme } from '@mui/material/styles';

function Navbar() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const theme = useTheme(); // Use theme for responsive breakpoints

  const appBarStyle = {
    backgroundColor: '#121212', // Dark theme for futuristic look
    borderBottom: '1px solid neon', // Neon for a retro-futuristic vibe
    boxShadow: 'none',
    fontFamily: 'Press Start 2P', // Retro pixelated font
  };
  
  const buttonStyle = {
    my: 1,
    mx: 1.5,
    color: 'white',
    fontWeight: 'bold',
    fontFamily: 'Press Start 2P', // Apply pixelated font for buttons
    fontSize: '0.625rem', // Smaller font size to compensate for the Press Start 2P's larger appearance
    '&:hover': {
      backgroundColor: 'rgba(255,255,255,0.08)',
      transition: 'background-color 0.3s ease',
      transform: 'scale(1.05)', // Scale effect on hover
    },
  };

  const iconStyle = {
    color: 'white',
    marginRight: theme.spacing(1.5),
    '&:hover': {
      opacity: 0.7,
    },
  };

  return (
    <AppBar position="fixed" sx={appBarStyle}>
      <Container maxWidth="lg">
        <Toolbar disableGutters>
          <Typography variant="h6" color="inherit" noWrap sx={{ flexGrow: 1, fontFamily: 'Press Start 2P', color: 'white', fontSize: '1rem' }}>
            AARON BINOY
          </Typography>
          <Box sx={{ display: { xs: 'none', md: 'flex' }, alignItems: 'center' }}>
            <Button href="#Home" sx={buttonStyle}>Home</Button>
            <Button href="#About" sx={buttonStyle}>About</Button>
            <Button href="#Projects" sx={buttonStyle}>Projects</Button>
            <IconButton href="https://www.linkedin.com/in/aaronbinoy/" sx={iconStyle}>
              <LinkedInIcon />
            </IconButton>
            <IconButton href="https://github.com/aarongeo1" sx={iconStyle}>
              <GitHubIcon />
            </IconButton>
          </Box>
          <IconButton
            aria-label="open drawer"
            edge="end"
            onClick={() => setIsDrawerOpen(true)}
            sx={{ ...iconStyle, ml: 2, display: { md: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </Container>
      <Drawer
        anchor="right"
        open={isDrawerOpen}
        onClose={() => setIsDrawerOpen(false)}
        sx={{
          '.MuiDrawer-paper': { backgroundColor: '#121212', color: 'white', width: '75%' },
        }}
      >
        <Box
          sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
          role="presentation"
          onClick={() => setIsDrawerOpen(false)}
          onKeyDown={() => setIsDrawerOpen(false)}
        >
            <Button href="#Home" sx={buttonStyle}>Home</Button>
            <Button href="#About" sx={buttonStyle}>About</Button>
            <Button href="#Projects" sx={buttonStyle}>Projects</Button>
          <IconButton href="https://www.linkedin.com/in/aaronbinoy/" sx={{ ...iconStyle, m: 2 }}>
            <LinkedInIcon />
            LinkedIn
          </IconButton>
          <IconButton href="https://github.com/aarongeo1" sx={{ ...iconStyle, m: 2 }}>
            <GitHubIcon />
            GitHub
          </IconButton>
        </Box>
      </Drawer>
    </AppBar>
  );
}

export default Navbar;
