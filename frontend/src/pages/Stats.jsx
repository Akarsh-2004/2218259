// Stats.jsx
import React, { useState } from 'react';
import { Container, TextField, Button, Typography, Box, Paper } from '@mui/material';
import axios from 'axios';
import StatsTable from '../components/StatsTable';
import { log } from '../api/logger';

// Removed custom CSS import

const Stats = () => {
  const [shortcode, setShortcode] = useState('');
  const [stats, setStats] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchStats = async () => {
    if (!shortcode.trim()) {
      alert('Please enter a valid shortcode');
      return;
    }

    try {
      setLoading(true);
      const res = await axios.get(`http://localhost:3000/api/shorturls/${shortcode.trim()}`);
      setStats(res.data);
      await log('info', 'frontend', `Fetched stats for: ${shortcode}`);
    } catch (err) {
      console.error('Fetch stats error:', err?.response?.data || err.message);
      await log('error', 'frontend', `Failed to fetch stats: ${shortcode}`);
      alert(err?.response?.data?.error || 'Error fetching stats');
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container maxWidth="sm" sx={{ mt: 6, mb: 4 }}>
      <Paper sx={{ p: 4, mb: 4 }} elevation={3}>
        <Box sx={{ textAlign: 'center', mb: 2 }}>
          <Typography variant="h4" fontWeight="bold" color="primary" gutterBottom>
            URL Statistics
          </Typography>
        </Box>
        <TextField
          label="Enter Shortcode"
          value={shortcode}
          onChange={(e) => setShortcode(e.target.value)}
          fullWidth
          margin="normal"
          variant="outlined"
        />
        <Button
          variant="contained"
          color="primary"
          onClick={fetchStats}
          disabled={loading}
          fullWidth
          sx={{ mt: 2 }}
        >
          {loading ? 'Fetching...' : 'Get Stats'}
        </Button>
      </Paper>
      {stats && <StatsTable stats={stats} />}
    </Container>
  );
};

export default Stats;
