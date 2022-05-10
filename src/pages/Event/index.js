import React from 'react';
import { Box, TextField, Typography } from '@mui/material';

const Event = () => {
  return (
    <Box m={2} mt={5}>
      <Typography variant="h4" gutterBottom>
        Upcoming events
      </Typography>
      <TextField fullWidth
                 type="search" id="fullWidth" />
    </Box>
  );
};

export default Event;
