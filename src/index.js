import React, { useState, useMemo } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { ThemeProvider, CssBaseline } from '@mui/material';
import { ThemeContext, lightTheme, darkTheme } from './theme';

// This Root component manages the theme state for the entire application
const Root = () => {
  const [mode, setMode] = useState('light');

  // Select the theme based on the current mode
  const theme = useMemo(() => (mode === 'light' ? lightTheme : darkTheme), [mode]);

  // Function to toggle the theme
  const toggleTheme = () => {
    setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
  };

  return (
    // The ThemeContext.Provider makes the theme mode and toggle function available to all children
    <ThemeContext.Provider value={{ mode, toggleTheme }}>
      {/* The ThemeProvider from MUI applies the actual theme styles */}
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <App />
      </ThemeProvider>
    </ThemeContext.Provider>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Root />
  </React.StrictMode>
);

