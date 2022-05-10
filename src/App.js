import React from 'react';
import { Redirect, Route, BrowserRouter, Switch } from 'react-router-dom';
import { DeviceFrameset } from 'react-device-frameset';
import 'react-device-frameset/styles/marvel-devices.min.css'

import Event from './pages/Event';
import Party from './pages/Party';
import Chat from './pages/Chat';
import { Box } from '@mui/material';

function App() {
  return (
    <DeviceFrameset device="iPhone X">
      <Box height="100%" style={{ overflowY: 'scroll' }}>
        <BrowserRouter>
          <Switch>
            <Route path="/event">
              <Event/>
            </Route>
            <Route path="/party">
              <Party/>
            </Route>
            <Route path="/chat/:id">
              <Chat/>
            </Route>
            <Route path="/">
              <Redirect to="/event"/>
            </Route>
          </Switch>
        </BrowserRouter>
      </Box>
    </DeviceFrameset>
  );
}

export default App;
