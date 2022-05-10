import React from 'react';
import { useHistory } from 'react-router-dom';
import { Avatar, Box, Button, Dialog, IconButton, Stack, Typography } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { DeviceFrameset } from 'react-device-frameset';

const ParticipantsDialog = ({ open, onClose, event = {} }) => {
  const history = useHistory();

  const onChat = (name) => {
    history.push(`/chat/${name}`);
    onClose();
  }

  return (
    <Dialog
      fullScreen
      open={open}
      onClose={onClose}
    >
      <DeviceFrameset device="iPhone X">
        <Box mt={3} mx={3}>
          <Stack direction="row"
                 justifyContent="space-between"
                 alignItems="flex-start"
                 spacing={1}>
            <Typography variant="h4"
                        sx={{ mt: 1, mb: 4 }}>search {event.title} participants</Typography>
            <IconButton onClick={onClose} color="default">
              <CloseIcon/>
            </IconButton>
          </Stack>
          <Stack spacing={4}>
            {event.members.map(name =>
              <Stack key={name} alignItems="enter" direction="row">
                <Avatar alt={name}
                        src={`https://fakeface.rest/face/view?minimum_age=25&maximum_age=30&t=${Math.random()}`}
                        sx={{ mr: 2 }}/>
                <Typography variant="h6" component="div" sx={{ mr: 'auto' }}>{name}</Typography>
                <Button onClick={() => onChat(name)} variant="contained">Chat</Button>
              </Stack>
            )}
          </Stack>
        </Box>
      </DeviceFrameset>
    </Dialog>
  );
};

export default ParticipantsDialog;
