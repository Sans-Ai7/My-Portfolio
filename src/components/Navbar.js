import React, { useState, useEffect, useContext } from 'react';
import { Link } from 'react-scroll'; // Uses react-scroll, NOT react-router-dom
import { AppBar, Toolbar, Typography, Button, IconButton, Drawer, List, ListItem, ListItemText, Box } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import { ThemeContext } from '../theme';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const { mode, toggleTheme } = useContext(ThemeContext);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleDrawerToggle = () => {
    setDrawerOpen(!drawerOpen);
  };

  const navLinks = [
    { title: 'Home', to: 'hero' },
    { title: 'Projects', to: 'projects' },
    { title: 'Contact', to: 'contact' },
  ];

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center', p: 2 }}>
      <List>
        {navLinks.map((item) => (
          <ListItem button key={item.title} component={Link} to={item.to} smooth={true} duration={500} onClick={handleDrawerToggle}>
            <ListItemText primary={item.title} />
          </ListItem>
        ))}
      </List>
      <IconButton onClick={toggleTheme} color="inherit">
        {mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
      </IconButton>
    </Box>
  );

  return (
    <>
      <AppBar
        position="fixed"
        elevation={0}
        sx={{
          background: scrolled ? (mode === 'dark' ? 'rgba(0,0,0,0.7)' : 'rgba(255,255,255,0.7)') : 'transparent',
          backdropFilter: scrolled ? 'blur(10px)' : 'none',
          transition: 'background 0.3s ease-in-out',
          boxShadow: scrolled ? (mode === 'dark' ? '0px 0px 15px rgba(255,255,255,0.1)' : '0px 0px 15px rgba(0,0,0,0.1)') : 'none',
        }}
      >
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Sanskruti's Portfolio
          </Typography>
          {isMobile ? (
            <IconButton color="inherit" aria-label="open drawer" edge="end" onClick={handleDrawerToggle}>
              <MenuIcon />
            </IconButton>
          ) : (
            <Box>
              {navLinks.map((item) => (
                <Button key={item.title} color="inherit" component={Link} to={item.to} smooth={true} duration={500} spy={true} activeClass="active">
                  {item.title}
                </Button>
              ))}
              <IconButton sx={{ ml: 1 }} onClick={toggleTheme} color="inherit">
                {mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
              </IconButton>
            </Box>
          )}
        </Toolbar>
      </AppBar>
      <Drawer anchor="right" open={drawerOpen} onClose={handleDrawerToggle}>
        {drawer}
      </Drawer>
    </>
  );
};

export default Navbar;

