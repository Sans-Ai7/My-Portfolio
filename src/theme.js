import { createTheme } from '@mui/material/styles';

// --- Light Theme ---
// Defines the colors and styles for the light mode of the application.
export const lightTheme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#1976d2', // A standard blue for primary elements
    },
    secondary: {
      main: '#dc004e', // A pink for secondary accents
    },
    background: {
      default: '#f4f6f8', // A light grey for the main background
      paper: '#ffffff',   // White for card backgrounds
    },
    text: {
      primary: '#333333', // Dark grey for primary text
      secondary: '#555555',// Lighter grey for secondary text
    },
  },
  typography: {
    fontFamily: 'Roboto, sans-serif',
  },
});

// --- Dark Theme ---
// Defines the colors and styles for the dark mode of the application.
export const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#90caf9', // A lighter blue for dark mode
    },
    secondary: {
      main: '#f48fb1', // A lighter pink for dark mode
    },
    background: {
      default: '#121212', // A very dark grey for the main background
      paper: '#1e1e1e',   // A slightly lighter grey for card backgrounds
    },
    text: {
      primary: '#e0e0e0',  // Light grey for primary text
      secondary: '#b0b0b0',// Darker grey for secondary text
    },
  },
  typography: {
    fontFamily: 'Roboto, sans-serif',
  },
});
