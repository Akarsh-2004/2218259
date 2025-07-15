// App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import Home from './pages/Home';
import Stats from './pages/Stats';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';

function App() {
  const AppLayout = () => {
    const location = useLocation();
    const isActive = (path) => location.pathname === path;

    return (
      <>
        {/* Navigation Bar */}
        <AppBar position="sticky" color="primary" elevation={2}>
          <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
            <Typography variant="h6" component={Link} to="/" sx={{ color: 'inherit', textDecoration: 'none', fontWeight: 'bold', letterSpacing: 1 }}>
           
            </Typography>
            <Box>
              <Button
                component={Link}
                to="/"
                color={isActive('/') ? 'secondary' : 'inherit'}
                sx={{ fontWeight: isActive('/') ? 'bold' : 400, mr: 2 }}
              >
                Home
              </Button>
              <Button
                component={Link}
                to="/stats"
                color={isActive('/stats') ? 'secondary' : 'inherit'}
                sx={{ fontWeight: isActive('/stats') ? 'bold' : 400 }}
              >
                Stats
              </Button>
            </Box>
          </Toolbar>
        </AppBar>
        {/* Routes */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/stats" element={<Stats />} />
        </Routes>
      </>
    );
  };

  return (
    <Router>
      <AppLayout />
    </Router>
  );
}

export default App;
