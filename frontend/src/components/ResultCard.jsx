import React from 'react';
import { Card, CardContent, Typography, Link, Alert } from '@mui/material';

const ResultCard = ({ result }) => {
  if (result.error) {
    return (
      <Alert severity="error" sx={{ mb: 2 }}>
        {`Failed to shorten URL: ${result.url || ''} (${result.error})`}
      </Alert>
    );
  }

  return (
    <Card sx={{ mb: 2 }}>
      <CardContent>
        <Typography variant="subtitle1">
          Short URL:&nbsp;
          <Link href={result.shortlink} target="_blank" rel="noopener">
            {result.shortlink}
          </Link>
        </Typography>
        <Typography variant="body2">
          Expires At: {new Date(result.expiry).toLocaleString()}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default ResultCard;
