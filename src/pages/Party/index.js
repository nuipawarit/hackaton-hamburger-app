import React from 'react';
import { Box, Typography, TextField, Stack, Snackbar } from '@mui/material';
import PartyCard from './PartyCard'

const Party = () => {
  const [isJoining, setJoining] = React.useState(false)
  
  const handleClick = () => {
    setJoining(true);
  };
  
  const handleClose = () => {
    setJoining(false);
  };

  return (
    <Box m={2} mt={5}>
      <Typography variant="h4" sx={{ mb: 3 }}>
        Odette dinner
      </Typography>
      <Typography variant="body1" sx={{ mb: 2 }}>
      3 Michellin restaurants Modern French cuisine served amid sophisticated decor in the National Gallery Singapore.
      </Typography>
      <TextField fullWidth label="Search" type="search" size='small'  sx={{ mb: 2 }}/>
      <Stack spacing={2}>
        <PartyCard title="All on me, I'm rich" name='Markzaa' location='Singapore' trigger={handleClick}/>
        <PartyCard title="Not on me , I'm broke" name='Patjung' location='Singapore' trigger={handleClick}/>
        <PartyCard title="Daddy's here" name='lnWfirst' location='Singapore' trigger={handleClick}/>
      </Stack>
      <Snackbar
        anchorOrigin={{ vertical:'top', horizontal:'center' }}
        open={isJoining}
        onClose={handleClose}
        message="Your request is sent Please wait for the host to approve"
        key={'topcenter'}
        sx={{ mt: 91, width: '81%', mx: 'auto' }}
      />
    </Box>
  );
};

export default Party;
