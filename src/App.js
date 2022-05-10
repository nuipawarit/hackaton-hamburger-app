import React from 'react';
import { Redirect, Route, BrowserRouter, Switch } from 'react-router-dom';
import { DeviceFrameset } from 'react-device-frameset';
import 'react-device-frameset/styles/marvel-devices.min.css'

import Event from './pages/Event';
import Party from './pages/Party';
import Chat from './pages/Chat';
import { Box, createTheme, ThemeProvider } from '@mui/material';

const theme = createTheme({
  typography: {
    fontFamily: [
      'Inter',
    ].join(','),
  },
  palette: {
    primary: {
      main: '#EB5D5F',
    },
    text: {
      primary: '#000000',
      secondary: '#FFFFFF',
    },
    background: {
      default: '#EB5D5F',
    }
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <DeviceFrameset device="iPhone X">
        <Box height="100%" style={{ overflowY: 'scroll', background: '#d87490' }} >
          <BrowserRouter forceRefresh>
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
    </ThemeProvider>
  );
}

export default App;
