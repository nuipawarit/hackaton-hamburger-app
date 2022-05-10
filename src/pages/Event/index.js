import React from 'react';
import {
  Avatar,
  AvatarGroup,
  Box,
  Button,
  Card,
  CardContent,
  Stack,
  TextField,
  Typography
} from '@mui/material';
import { MOCK_EVENTS } from './const';
import ParticipantsDialog from './ParticipantsDialog';
import { useHistory } from 'react-router-dom';

const Event = () => {
  const history = useHistory();
  const [open, setOpen] = React.useState(false);
  const [selected, setSelected] = React.useState(null);

  const onParticipantListClick = (event) => {
    setSelected(event);
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
    setSelected(null);
  };

  const onJoin = () => {
    history.push(`/party`);
  };

  return (
    <Box m={2} mt={5}>
      <Typography variant="h4" sx={{ mb: 4, color: 'white' }} >
        Upcoming events
      </Typography>
      <TextField fullWidth variant="filled" label="Search" type="search" size='small' sx={{ mb: 2 }}/>
      <Stack spacing={2}>
        {MOCK_EVENTS.map(event =>
          <Card key={event.title} variant="outlined">
            <CardContent>
              <Stack direction="row"
                     justifyContent="space-between"
                     alignItems="baseline"
                     spacing={1}
                     sx={{ mb: 1 }}>
                <Typography variant="h6" component="div">{event.title}</Typography>
                <Button onClick={() => onJoin(event)} variant="outlined">Join</Button>
              </Stack>
              <Stack alignItems="center" direction="row">
                <AvatarGroup max={4}
                             onClick={() => onParticipantListClick(event)}
                             style={{ cursor: 'pointer' }}
                             sx={{ mr: 'auto' }}>
                  {event.members.map(name =>
                    <Avatar alt={name}
                            src={`https://fakeface.rest/face/view?minimum_age=25&maximum_age=30&t=${Math.random()}`}/>
                  )}
                </AvatarGroup>
                <Typography variant="body2">
                  {event.info}
                </Typography>
              </Stack>
            </CardContent>
          </Card>
        )}
      </Stack>
      {selected && <ParticipantsDialog open={open} onClose={onClose} event={selected}/>}
    </Box>
  );
};

export default Event;
