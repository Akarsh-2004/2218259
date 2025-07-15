import React from 'react';
import {
  Table, TableBody, TableCell, TableContainer,
  TableHead, TableRow, Paper, Typography
} from '@mui/material';

const StatsTable = ({ stats }) => {
  return (
    <div style={{ marginTop: '2rem' }}>
      <Typography variant="h6">URL: {stats.url}</Typography>
      <Typography variant="body2">Created At: {new Date(stats.createdAt).toLocaleString()}</Typography>
      <Typography variant="body2">Expires At: {new Date(stats.expiresAt).toLocaleString()}</Typography>
      <Typography variant="body2">Total Clicks: {stats.totalClicks}</Typography>

      <TableContainer component={Paper} sx={{ marginTop: 2 }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Timestamp</TableCell>
              <TableCell>Referrer</TableCell>
              <TableCell>Location</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {stats.clicks.length === 0 ? (
              <TableRow><TableCell colSpan={3}>No click data available</TableCell></TableRow>
            ) : (
              stats.clicks.map((click, idx) => (
                <TableRow key={idx}>
                  <TableCell>{new Date(click.timestamp).toLocaleString()}</TableCell>
                  <TableCell>{click.referrer || 'Unknown'}</TableCell>
                  <TableCell>{click.location || 'Unknown'}</TableCell>
                </TableRow>
              ))
            )}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default StatsTable;
