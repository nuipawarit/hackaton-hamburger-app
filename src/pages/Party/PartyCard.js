import React from "react";
import { Card, CardContent, Stack, Typography, Avatar, Button } from '@mui/material';

const PartyCard = ({title, name, location, trigger}) => {
    const [isJoined,setJoin] = React.useState(false);

    const toggleJoin = () => {
        if(!isJoined) {
          trigger()
        }
        setJoin(!isJoined)
    }

    return (
        <Card>
            <CardContent>
              <Stack direction="row" 
                      justifyContent="space-between"
                      alignItems="baseline"
                      spacing={1}
                      sx={{ mb: 1 }}
              >
                <Typography variant="h5" gutterBottom component="div">
                  {title}
                </Typography>
                <Button variant={isJoined?"contained":"outlined"}
                        onClick={toggleJoin}
                >{isJoined?'Joined':'Join'}</Button>
              </Stack>
              <Stack direction="row" 
                      justifyContent="space-between"
                      alignItems="baseline"
                      spacing={1}
              >
                <Stack direction="row"
                       justifyContent="left"
                       alignItems="center"
                       spacing={1}
                >
                  <Avatar alt="Remy Sharp" src={`https://fakeface.rest/face/view?minimum_age=25&maximum_age=30&t=${Math.random()}`} />
                  <Typography variant="body1" gutterBottom>
                    {name}
                  </Typography>
                </Stack>
                  <Typography variant="caption" display="block" sx={{ pt: 3 }} gutterBottom>
                    {location}
                  </Typography>
              </Stack>
            </CardContent>
          </Card>
    );
}

export default PartyCard;