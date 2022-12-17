import React from 'react';
import ReactDOM from 'react-dom/client';
// import { App } from 'components/App';
import { ThemeProvider } from 'styled-components';
import { theme } from './theme';
import './index.css';
import { Profile } from 'components/Profile/Profile';
import { Statistics } from 'components/Statistics/Statistics';
import user from './assets/user.json';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      {/* <App /> */}
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics />
    </ThemeProvider>
  </React.StrictMode>
);
