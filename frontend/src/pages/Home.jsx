// Home.jsx
import React, { useState } from 'react';
import { Container, Typography, Box } from '@mui/material';
import UrlInputForm from '../components/UrlInputForm';
import ResultCard from '../components/ResultCard';
import axios from 'axios'; // Using axios directly
import { log } from '../api/logger';

// Removed custom CSS import

const Home = () => {
  const [results, setResults] = useState([]);

  const handleSubmit = async (urls) => {
    const promises = urls.map(async ({ url, validity, shortcode }) => {
      try {
        const res = await axios.post('http://localhost:3000/api/shorturls', {
          url,
          validity: Number(validity),
          shortcode
        });
        await log('info', 'frontend', `Shortened URL: ${res.data.shortlink}`);
        return res.data;
      } catch (err) {
        await log('error', 'frontend', `Failed to shorten URL: ${url}`);
        return { error: err.response?.data?.error || 'Failed', url };
      }
    });

    const resData = await Promise.all(promises);
    setResults(resData);
  };

  return (
    <Container maxWidth="md" sx={{ mt: 6, mb: 4 }}>
      <Box sx={{ textAlign: 'center', mb: 4 }}>
        <Typography variant="h3" fontWeight="bold" color="primary" gutterBottom>
          URL Shortener
        </Typography>
        <Typography variant="subtitle1" color="text.secondary">
          Instantly shorten your links and track their stats
        </Typography>
      </Box>
      <UrlInputForm onSubmit={handleSubmit} />
      {results.map((result, idx) => (
        <ResultCard key={idx} result={result} />
      ))}
    </Container>
  );
};

export default Home;
