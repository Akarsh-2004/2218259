import React, { useState } from 'react';
import {
  TextField,
  Button,
  Grid,
  Typography,
  Paper
} from '@mui/material';

const UrlInputForm = ({ onSubmit }) => {
  const [inputs, setInputs] = useState([
    { url: '', validity: '', shortcode: '' }
  ]);

  const handleChange = (index, field, value) => {
    const newInputs = [...inputs];
    newInputs[index][field] = value;
    setInputs(newInputs);
  };

  const addField = () => {
    if (inputs.length < 5) {
      setInputs([...inputs, { url: '', validity: '', shortcode: '' }]);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const valid = inputs.filter(i => i.url.trim());
    onSubmit(valid);
  };

  return (
    <Paper sx={{ padding: 2, marginBottom: 4 }}>
      <form onSubmit={handleSubmit}>
        <Typography variant="h6" gutterBottom>
          Enter URLs (up to 5)
        </Typography>
        {inputs.map((input, idx) => (
          <Grid container spacing={2} key={idx} sx={{ marginBottom: 2 }}>
            <Grid item xs={12} md={5}>
              <TextField
                fullWidth
                label="Long URL"
                value={input.url}
                onChange={(e) => handleChange(idx, 'url', e.target.value)}
                required
              />
            </Grid>
            <Grid item xs={6} md={3}>
              <TextField
                fullWidth
                label="Validity (min)"
                value={input.validity}
                type="number"
                onChange={(e) => handleChange(idx, 'validity', e.target.value)}
              />
            </Grid>
            <Grid item xs={6} md={4}>
              <TextField
                fullWidth
                label="Custom Shortcode"
                value={input.shortcode}
                onChange={(e) => handleChange(idx, 'shortcode', e.target.value)}
              />
            </Grid>
          </Grid>
        ))}
        <Button onClick={addField} disabled={inputs.length >= 5}>
          Add More
        </Button>
        <Button variant="contained" type="submit" sx={{ ml: 2 }}>
          Shorten
        </Button>
      </form>
    </Paper>
  );
};

export default UrlInputForm;
